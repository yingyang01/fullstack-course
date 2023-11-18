import useAuthService from '#app/services/auth';
import useProfileService from '#app/services/profile';
import usePortfolioService from '#app/services/portfolio';

export default ({
    // TODO: 10. get from outside
    // userRepo
}, config) => {
    // TODO: 11. inject to service
    const authService = useAuthService({}, config.jwt);
    const profileService = useProfileService({});
    const portfolioService = usePortfolioService({});

    return {
        authService,
        profileService,
        portfolioService,
    }
}