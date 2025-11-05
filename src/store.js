import musicDataJson from '@/assets/music_data.json';
import { computed, ref } from 'vue';
import { syncStorage } from './utils';

export const musicData = ref(musicDataJson.data);

// 엄청 큰 수 만들어서 중복 없게
// musicData.value.forEach(data => {
//     if(!data.id) data.id = getId();
// });

syncStorage(musicData, 'musicData')

// 카테고리 중복 제거
export const categories = computed(()=> {
    return [...new Set(musicData.value.map(m => m.category))]
})

// 현재 선택된 카테고리
export const selectCategory = ref("All")

//검색용
export const searchInput = ref("");

//하이라이트용
export const searchedWord = ref("");