<script setup>
import { useAuthStore } from '@/stores/auth';
import { usePortfolioStore } from '@/stores/portfolio';

const authStore = useAuthStore();
const store = usePortfolioStore();
const route = useRoute();

if (!authStore.canEdit) {
    navigateTo('/login');
}

useHead({
    title: `Create a new portfolio | Pichet Itngam`,
})
</script>

<template>
    <PortfolioForm
        :portfolio="store.portfolio"
        :can-delete="authStore.canEdit"
        @submit="store.savePortfolio"
        @cancel="store.enterViewMode"
        @delete="store.deletePortfolio(route.params.id)"
    />
</template>