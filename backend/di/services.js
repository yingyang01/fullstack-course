import useAuthService from '#app/services/auth';
import useProfileService from '#app/services/profile';
// TODO: 3. use portfolio service
// import usePortfolioService from '#app/services/portfolio';

export default ({ }, config) => {
    const authService = useAuthService({}, config.jwt);
    const profileService = useProfileService({});
    // TODO: 4. init portfolio service
    // const portfolioService = usePortfolioService({});

    return {
        authService,
        profileService,
        // TODO: 5. return portfolio service
        // portfolioService,
    }
}