export function loginAPI(username, password) {
    return useFetchAPI('/login', {
        method: 'post',
        body: {
            username,
            password,
        },
    });
}