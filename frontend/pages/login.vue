<script setup>
definePageMeta({
    layout: 'center',
});

useHead({
    title: 'Login',
});

// TODO: 1. variables
// const normalVariable = 1;
// const reactiveVariable = ref(1);

// TODO: 2. console
// console.log('normalVariable', normalVariable);
// console.log('reactiveVariable', reactiveVariable);
// console.log('reactiveVariable.value', reactiveVariable.value);

const onSubmit = async (values) => {
    console.log('values', values);
}
</script>

<template>
    <main class="m-auto w-[300px]">
        <LoginForm @submit="onSubmit" />

        <!-- TODO: 3. Normal variable -->
        <!-- <p class="mt-10">normal: {{ normalVariable }}</p>
        <BaseButton
            size="small"
            @click="normalVariable = normalVariable + 1"
        >
            normal variable
        </BaseButton> -->

        <!-- TODO: 4. Normal variable -->
        <!-- <p class="mt-10">reactive: {{ reactiveVariable }}</p>
        <BaseButton
            size="small"
            @click="reactiveVariable = reactiveVariable + 1"
        >
            reactive variable
        </BaseButton> -->
    </main>
</template>