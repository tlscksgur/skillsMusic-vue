<script setup>
import { categories, searchedWord, searchInput, selectedCategory } from '@/store';

function selectCategory(category) {
    selectedCategory.value = category;
    console.log(selectedCategory.value);
}

function activeMenuClass(category) {
    return {
        'active-menu': category === selectedCategory.value
    }
}

function search() {
    searchedWord.value = searchInput.value;
}
</script>

<template>
    <nav class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
				    <li class="text-center">
                        <div class="search">
                            <div class="form-group input-group">
                                <input type="text" class="form-control" @keypress.enter="search" v-model="searchInput" placeholder="앨범검색">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" @click="search" type="button"><i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
					</li>
				
                    <li>
                        <a :class="activeMenuClass('ALL')" @click="selectCategory('ALL')"  href="#"><i class="fa fa-th-list fa-2x"></i> <span>ALL</span></a>
                    </li>

                    <li v-for="category in categories" :key="category">
                        <a href="#" :class="activeMenuClass(category)" @click="selectCategory(category)"><i class="fa fa-youtube-play fa-2x"></i> <span>{{category}}</span></a>
                    </li>              			
                </ul>
            </div>
        </nav>  

        <!-- /. NAV SIDE  -->
</template>

<style scoped>

</style>