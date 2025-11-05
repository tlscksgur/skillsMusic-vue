<script setup>
import { computed } from 'vue';
import WrapperContent from './wrapper/WrapperContent.vue';
import { musicData, searchedWord, selectedCategory } from '@/store';

const contents = computed(() => {
    return musicData.value
        .toSorted((a, b) => new Date(b.release) - new Date(a.release))
        .filter(data => 
            selectedCategory.value === 'ALL' ||
            selectedCategory.value !== 'ALL' && data.category === selectedCategory.value
        )
        .filter(data => 
            !searchedWord.value.trim() ||
            searchedWord.value && (data.albumName + data.artist).includes(searchedWord.value) 
        )
});
</script>

<template>
    <div id="page-wrapper" >
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                        <h2>{{selectedCategory}}</h2>
                    </div>
                </div>              
                 <!-- /. ROW  -->
                  <hr />
                <div class="row">
                    <div class="contents col-md-12">                
                    <!-- contents start -->
                     <template v-if="contents.length">
                        <template v-for="(item,index) in contents" :key="item.id">
                            <WrapperContent :item="item"/>
                        </template>
                     </template>
                     <template v-else>
                        <p>검색된 앨범이 없습니다.</p>
                     </template>
                        
                        
                        <!-- <div class="col-md-2 col-sm-2 col-xs-2 product-grid">
                            <div class="product-items">
                                    <div class="project-eff">
                                        <img class="img-responsive" src="" alt="Time for the moon night">
                                    </div>
                                <div class="produ-cost">
                                    <h5>Lovelyz 4th Mini Album</h5>
                                    <span>
                                        <i class="fa fa-microphone"> 아티스트</i> 
                                        <p>러블리즈(Lovelyz)</p>
                                    </span>
                                    <span>
                                        <i class="fa  fa-calendar"> 발매일</i> 
                                         
                                        <p>2018.04.23</p>
                                    </span>
                                    <span>
                                        <i class="fa fa-money"> 가격</i>
                                        <p>￦20,000</p>
                                    </span>
                                    <span class="shopbtn">
                                        <button class="btn btn-default btn-xs">
                                            <i class="fa fa-shopping-cart"></i> 추가하기 (1개) 
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div> -->

                    <!-- contents end -->
                    </div>
                </div>        
			</div>
            <!-- /. PAGE INNER  -->
            </div>
         <!-- /. PAGE WRAPPER  -->
</template>

<style scoped>

</style>