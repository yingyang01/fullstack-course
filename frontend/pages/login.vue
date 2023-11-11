<script setup>
import { useAuthStore } from '@/stores/auth';

definePageMeta({
    layout: 'center',
});

useHead({
    title: 'Login',
});

const store = useAuthStore();

const onSubmit = async (values) => {
    // TODO: save to the API and redirect back to homepage
    // const success = await store.login(values.username, values.password);
    // if (success) {
    //     await navigateTo('/');
    // }
}
</script>

<template>
    <main class="m-auto w-[300px]">
        <LoginForm @submit="onSubmit" />
        <!-- TODO: Show user error here -->
        <!-- <BaseErrorMessage>
            {{ store.userError }}
        </BaseErrorMessage> -->
    </main>
</template>