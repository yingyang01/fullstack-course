import { useAuthStore } from '@/stores/auth';

// TODO: global middleware to set the user from cookie
// export default defineNuxtRouteMiddleware((to, from) => {
//     const token = useCookie('token');
//     const store = useAuthStore();

//     if (token.value) {
//         store.setUser(token.value);
//     }
// });