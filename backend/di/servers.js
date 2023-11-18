import useHttpServer from '#app/servers/http/index'

export default ({
    authService,
    profileService,
    // TODO: 6. get portfolio service
    // portfolioService,
}, config) => {
    const httpServer = useHttpServer({
        authService,
        profileService,
        // TODO: 7. inject portfolio service
        // portfolioService,
    }, config);

    function run() {
        httpServer.run();
    }

    return {
        run,
    }
}