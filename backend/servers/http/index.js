import express from 'express';
import cors from 'cors';
import useAuthHandlers from '#app/servers/http/handlers/auth';
import { errorHandler } from '#app/servers/http/middlewares/errors';

export default ({ }, config) => {
    // TODO: 13. init express
    // const app = express();
    // TODO: 14. auth handlers
    // const auth = useAuthHandlers({}, config.http);

    // TODO: 15. parse request to JSON
    // TODO: 16. explan middleware concept
    // app.use(express.json());
    // app.use(cors(config.http.cors));
    // TODO: 17. return handler
    // app.use('/v1/auth', auth.router());
    // TODO: 18. error handler middleware
    // app.use(errorHandler);

    function run() {
        // app.listen(config.http.port, () => {
        //     console.log(`The server is running on port ${config.http.port}`);
        // });
    }

    return {
        run,
    };
};
