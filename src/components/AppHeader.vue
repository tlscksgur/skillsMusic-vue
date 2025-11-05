<script setup>
import ShoppingCartModal from './modals/ShoppingCartModal.vue';
</script>

<template>
    <nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header pull-left">
                <a class="navbar-brand" href="index.html">SKILLS MUSIC</a> 
            </div>
            
            <div class="panel-body pull-right">
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                <i class="fa fa-shopping-cart"></i> 쇼핑카트 <strong>1</strong> 개 금액 ￦ 20,000 원
                </button>
                <ShoppingCartModal/>
            </div>
        </nav>   
        
        <!-- /. NAV TOP  -->
</template>

<style scoped>

</style>