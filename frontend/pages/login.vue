<script setup>
definePageMeta({
    layout: 'center',
});

useHead({
    title: 'Login',
});

const onSubmit = async (values) => {
    console.log('values', values);
}
</script>

<template>
    <main class="m-auto w-[300px]">
        <LoginForm @submit="onSubmit" />
    </main>
</template>