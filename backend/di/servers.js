import useHttpServer from '#app/servers/http/index'

// TODO: 6. inject
export default ({ }, config) => {
    // TODO: 7. inject
    const httpServer = useHttpServer({}, config);

    function run() {
        httpServer.run();
    }

    return {
        run,
    }
}