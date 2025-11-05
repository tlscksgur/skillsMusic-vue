import musicDataJson from '@/assets/music_data.json';
import { computed, ref } from 'vue';
import { getId, syncStorage } from './utils';

export const musicData = ref(musicDataJson.data);
console.log(musicData.value);
musicData.value.forEach(data => {
    if(!data.id) data.id = getId();
});

syncStorage(musicData, 'musicData');


// 중복제거 카테고리
export const categories = computed(() => {
    return [...new Set(musicData.value.map(m => m.category))]
});
console.log(categories.value);

// 현재 선택된 카테고리
export const selectedCategory = ref('ALL');

// 검색용
export const searchInput = ref("");
// 하이라이트용
export const searchedWord = ref("");