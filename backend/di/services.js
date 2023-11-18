import useAuthService from '#app/services/auth';
// TODO: 2. import profile service that we do not implement that yet.
// import useProfileService from '#app/services/profile';

export default ({ }, config) => {
    const authService = useAuthService({}, config.jwt);
    // TODO: 3. init profile service
    // const profileService = useProfileService({});

    return {
        authService,
        // TODO: 4. return
        // profileService,
    }
}