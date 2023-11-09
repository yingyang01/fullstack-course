import { defineStore } from 'pinia';
import { loginAPI } from '@/repositories/auth';

export const useAuthStore = defineStore('auth', () => {
    const user = ref({
        loggedIn: false,
        token: '',
    });

    const isLoggingIn = ref(false);

    const token = computed(() => user.value.token);
    const canEdit = computed(() => user.value.loggedIn)

    async function login(username, password) {
        isLoggingIn.value = true;

        try {
            const { data: response, error, status } = await loginAPI(username, password);
            if (status == 'error') {
                throw new Error(error);
            }

            user.value = {
                loggedIn: true,
                token: response.value.token,
            };

            const token = useCookie('token');
            token.value = response.value.token;
        } catch (error) {
            throw new Error(error);
        } finally {
            isLoggingIn.value = false;
        }

        return true;
    }

    async function setUser(token) {
        user.value = {
            loggedIn: true,
            token,
        }
    }

    return {
        user,
        token,
        canEdit,
        login,
        setUser,
    }
})