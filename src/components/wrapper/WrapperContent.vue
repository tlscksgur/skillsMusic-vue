<script setup>
import { searchedWord } from '@/store';
import { priceParsing } from '@/utils';
import { computed } from 'vue';

const props = defineProps(['item']);

const albumName = computed(() => {
    if(searchedWord.value.trim()) {
        return props.item.albumName.replace(searchedWord.value, `<mark>${searchedWord.value}</mark>`);
    }

    return props.item.albumName;
});

const artist = computed(() => {
    if(searchedWord.value.trim()) {
        return props.item.artist.replace(searchedWord.value, `<mark>${searchedWord.value}</mark>`);
    }

    return props.item.artist;
});

function increaseCartCount() {
    props.item.count += 1;
}
</script>

<template>
    <div class="col-md-2 col-sm-2 col-xs-2 product-grid">
                            <div class="product-items">
                                    <div class="project-eff">
                                        <img class="img-responsive" :src="item.src" alt="Time for the moon night">
                                    </div>
                                <div class="produ-cost">
                                    <h5 v-html="albumName"></h5>
                                    <span>
                                        <i class="fa fa-microphone"> 아티스트</i> 
                                        <p v-html="artist"></p>
                                    </span>
                                    <span>
                                        <i class="fa  fa-calendar"> 발매일</i> 
                                         
                                        <p>{{ item.release }}</p>
                                    </span>
                                    <span>
                                        <i class="fa fa-money"> 가격</i>
                                        <p>￦{{ priceParsing(item.price) }}</p>
                                    </span>
                                    <span class="shopbtn">
                                        <button class="btn btn-default btn-xs" @click="increaseCartCount">
                                            <i class="fa fa-shopping-cart"></i>
                                            <template v-if="item.count <= 0"> 
                                                쇼핑카트담기
                                            </template>
                                            <template v-else>
                                                추가하기 ({{item.count}}개)
                                            </template> 
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
</template>

<style scoped>

</style>