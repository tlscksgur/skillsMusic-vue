<script setup>
    import { categories, searchedWord, searchInput, selectCategory } from '@/store';
    
    function selectCate(category) {
        selectCategory.value = category;
    }

    function activeMenuClass(category) {
        return{
            'active-menu': category === selectCategory.value
        }
    }

    function search() {
        searchedWord.value = searchInput.value;
    }

</script>

<template>
    <!-- /. NAV TOP  -->
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
                        <a :class="activeMenuClass('All')" class="active-menu" href="#" @click="selectCate('All')"><i class="fa fa-th-list fa-2x"></i> <span>ALL</span></a>
                    </li>
                    
                    <li v-for="category in categories" :key="category">
                        <a href="#" :class="activeMenuClass(category)" @click="selectCate(category)"><i class="fa fa-youtube-play fa-2x"></i> <span>{{category}}</span></a>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<style scoped></style>