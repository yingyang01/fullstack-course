import useAuthService from '#app/services/auth';
import useProfileService from '#app/services/profile';
import usePortfolioService from '#app/services/portfolio';

export default ({
    userRepo,
    profileRepo,
    // TODO: 6. get from outside
    // portfolioRepo,
}, config) => {
    const authService = useAuthService({ userRepo }, config.jwt);
    const profileService = useProfileService({ profileRepo });
    // TODO: 7. inject repo
    const portfolioService = usePortfolioService({});

    return {
        authService,
        profileService,
        portfolioService,
    }
}