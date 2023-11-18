import useHttpServer from '#app/servers/http/index'

export default ({
    authService,
    // TODO: 5.1. get from outside
    // profileService,
}, config) => {
    const httpServer = useHttpServer({ authService, profileService }, config);

    function run() {
        httpServer.run();
    }

    return {
        run,
    }
}