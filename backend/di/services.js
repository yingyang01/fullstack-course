import useAuthService from '#app/services/auth';
import useProfileService from '#app/services/profile';
import usePortfolioService from '#app/services/portfolio';

export default ({
    userRepo,
    // TODO: 6. get from outside
    // profileRepo,
}, config) => {
    const authService = useAuthService({ userRepo }, config.jwt);
    // TODO: 7. inject profile repo
    const profileService = useProfileService({});
    const portfolioService = usePortfolioService({});

    return {
        authService,
        profileService,
        portfolioService,
    }
}