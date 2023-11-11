import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const number = ref(1);

    const multiplyByTwo = computed(() => number.value * 2);

    function increase() {
        number.value = number.value + 1;
    }

    return {
        number,
        multiplyByTwo,
        increase,
    }
})