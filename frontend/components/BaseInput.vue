<script setup>
// TODO: 1. ป้องกัน fallthrough
// defineOptions({
//     inheritAttrs: false,
// });

// TODO: 2. v-model
// const props = defineProps({
//     name: String,
//     modelValue: String,
// });

// TODO: 3. update:modelValue โดยใช้ vee-validate
// const { value, errorMessage } = useField(() => props.name, undefined, {
//     syncVModel: true,
// });

// TODO: 4. แสดง style อีกแบบในกรณีที่มี error
// const style = computed(() => {
//     if (errorMessage.value) {
//         return 'w-full border-2 border-red rounded-md px-3 py-2 bg-white focus:outline-0';
//     }

//     return 'w-full border-2 border-tertiary rounded-md px-3 py-2 bg-white focus:border-secondary focus:outline-0';
// })
</script>

<template>
    <!-- TODO: 5. แสดงผล-->
    <!-- <div class="block mb-1">
        <input
            v-model="value"
            :class="style"
            v-bind="$attrs"
        />
    </div> -->
</template>