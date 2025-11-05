<script setup>
    import { computed } from 'vue';
    import WrapperContent from './wrapper/WrapperContent.vue';
    import { musicData, searchedWord, selectCategory } from '@/store';

    const contents = computed(()=> {
        return musicData.value
        .toSorted((a, b) => new Date(b.release) - new Date(a.release))
        .filter(data =>
            selectCategory.value === 'All' ||
            selectCategory.value !== 'All' && data.category === selectCategory.value
        )
        .filter(data => {
            !searchedWord.value.trim() ||
            searchedWord.value && (data.albumName + data.artist).includes(searchedWord.value)
        })
    });
    

</script>

<template>
    <div id="page-wrapper">
        <div id="page-inner">
            <div class="row">
                <div class="col-md-12">
                    <h2>{{selectCategory}}</h2>
                </div>
            </div>
            <!-- /. ROW  -->
            <hr />
            <div class="row">
                <template v-if="contents.length">
                    <template v-for="(item,index) in contents" :key="item.id">
                        <WrapperContent :item="item"/>
                    </template>
                </template>
                <template v-else>
                    <p>검색된 앨범이 없습니다.</p>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped></style>