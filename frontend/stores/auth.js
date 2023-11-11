import { defineStore } from 'pinia';
import { loginAPI } from '@/repositories/auth';

export const useAuthStore = defineStore('auth', () => {
    // TODO: 1. define user status and JWT
    // const user = ref({
    //     loggedIn: false,
    //     token: '',
    // });

    // TODO: 2. state of loading
    // const isLoggingIn = ref(false);
    // TODO: 3. error message
    // const userError = ref('');

    // TODO: 4. for convenience
    // const token = computed(() => user.value.token);
    // const canEdit = computed(() => user.value.loggedIn)

    // TODO: function of login
    // async function login(username, password) {
    //     isLoggingIn.value = true;

    //     const { data: response, error, status } = await loginAPI(username, password);
    //     if (status.value == 'error') {
    //         // TODO: handle errors
    //         useCustomError(error.value, (error) => {
    //             userError.value = error.data.error;
    //         });
    //     }

    //     user.value = {
    //         loggedIn: true,
    //         token: response.value.token,
    //     };

    //     // TODO: save into the cookie
    //     const token = useCookie('token');

    //     token.value = response.value.token;

    //     isLoggingIn.value = false;
    //     userError.value = '';

    //     return true;
    // }

    // TODO: Set user action
    // async function setUser(token) {
    //     user.value = {
    //         loggedIn: true,
    //         token,
    //     }
    // }

    return {
        // user,
        // token,
        // canEdit,
        // userError,
        // login,
        // setUser,
    }
})