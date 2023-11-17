<script setup>
// TODO: 6. implement page
// import { useAuthStore } from '@/stores/auth';
// import { usePortfolioStore } from '@/stores/portfolio';

// const authStore = useAuthStore();
// const store = usePortfolioStore();

// TODO: 7. use route
// const route = useRoute();

// if (authStore.canEdit && typeof route.query.edit != 'undefined') {
//     store.enterEditMode();
// }

// await store.getPortfolio(route.params.id);

// if (!store.portfolio) {
//     // TODO: 78 Nuxt custom error function
//     throw createError({
//         statusCode: 404,
//         statusMessage: 'Not found this portfolio.'
//     })
// }

// useHead({
//     title: `${store.portfolio.title} | Pichet Itngam`,
//     meta: [
//         { name: 'description', content: store.portfolio.excerpt }
//     ],
// })
</script>

<template>
    <!-- TODO: 9. show -->
    <!-- <BaseEditable :edit-mode="store.editMode">
        <template #view>
            <Portfolio
                :portfolio="store.portfolio"
                :can-edit="authStore.canEdit"
                @edit="store.enterEditMode"
            />
        </template>
        <template #edit>
            <PortfolioForm
                :portfolio="store.portfolio"
                :can-delete="authStore.canEdit"
                @submit="store.savePortfolio"
                @cancel="store.enterViewMode"
                @delete="store.deletePortfolio(route.params.id)"
            />
        </template>
    </BaseEditable> -->
</template>