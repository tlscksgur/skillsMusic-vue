<script setup>
import { computed } from 'vue';
import ShoppingCartModal from './modals/ShoppingCartModal.vue';
import { musicData } from '@/store';
import { priceParsing, priceToNumber } from '@/utils';

const cartTotalCount = computed(() => musicData.value.reduce((acc, cur) => acc + cur.count, 0));
const cartTotalPrice = computed(() => musicData.value.reduce((acc, cur) => acc + (cur.count * priceToNumber(cur.price)) ,0));
</script>

<template>
    <nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header pull-left">
                <a class="navbar-brand" href="index.html">SKILLS MUSIC</a> 
            </div>
            
            <div class="panel-body pull-right">
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                <i class="fa fa-shopping-cart"></i> 쇼핑카트 <strong>{{ cartTotalCount }}</strong> 개 금액 ￦ {{ priceParsing(cartTotalPrice) }} 원
                </button>
                <ShoppingCartModal :cartTotalPrice="cartTotalPrice"/>
            </div>
        </nav>   
        
        <!-- /. NAV TOP  -->
</template>

<style scoped>

</style>