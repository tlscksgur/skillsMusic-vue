<script setup>
import { musicData } from '@/store';
import { priceParsing, priceToNumber } from '@/utils';
import { computed } from 'vue';

const props = defineProps(['cartTotalPrice']);

const cartList = computed(() => musicData.value.filter(data => data.count > 0));

function deleteCart(item) {
    const confirm = window.confirm('정말 삭제하시겠습니까?');
    if(!confirm) return;

    item.count = 0;
}

function payment() {
    alert('결제가 완료되었습니다.');

    cartList.value.forEach(item => item.count = 0);
    $('#myModal').modal('hide');
}

function deleteLimit(count, e) {
    if(String(count).length <= 1) e.preventDefault();
}
</script>

<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 class="modal-title" id="myModalLabel">쇼핑카트</h4>
                            </div>
                            <div class="modal-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>
                                                앨범정보
                                            </th>
                                            <th>
                                                가격
                                            </th>
                                            <th>
                                                수량
                                            </th>
                                            <th>
                                                합계
                                            </th>
                                            <th>
                                                삭제
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in cartList" :key="item.id">
                                            <td class="albuminfo">
                                                <img :src="item.src">
                                                <div class="info">
                                                    <h4>{{ item.albumName }}</h4>
                                                    <span>
                                                        <i class="fa fa-microphone"> 아티스트</i> 
                                                        <p>{{ item.artist }}</p>
                                                    </span>
                                                    <span>
                                                        <i class="fa  fa-calendar"> 발매일</i> 
                                                        <p>{{ item.release }}</p>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="albumprice">
                                                ￦ {{ priceParsing(item.price) }}
                                            </td>
                                            <td class="albumqty">
                                                <input @keydown.delete="deleteLimit(item.count, $event)" min="1" type="number" class="form-control" v-model="item.count">
                                            </td>
                                            <td class="pricesum">
                                                ￦ {{ priceParsing(priceToNumber(item.price) * item.count) }}
                                            </td>
                                            <td>
                                                <button @click="deleteCart(item)" class="btn btn-default">
                                                    <i class="fa fa-trash-o"></i> 삭제
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="totalprice text-right">
                                    <h3>총 합계금액 : <span>￦{{ priceParsing(cartTotalPrice) }}</span> 원</h3>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
                                <button type="button" class="btn btn-primary" @click="payment">결제하기</button>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<style scoped>

</style>