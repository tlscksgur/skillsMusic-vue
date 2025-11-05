import { watch } from "vue";

// ref 반응형 변수를 로컬스토리지와 동기화 시키는 함수
export const syncStorage = (value, name) => {
    const storageName = '251105_cksgur_' + name;

    if(localStorage[storageName]) {
        value.value = JSON.parse(localStorage[storageName]);
    }

    watch(value, () => {
        localStorage[storageName] = JSON.stringify(value.value);
    }, {deep: true});
}

export const priceToNumber = (price) => Number(price.replace('원', ''));
export const priceParsing = (price) => {
    if(typeof price === 'number') return price.toLocaleString();

    return priceToNumber(price).toLocaleString();
}

export const getId = () => Math.floor(Math.random() * 2 ** 31);