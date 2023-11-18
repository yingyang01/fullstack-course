import express from 'express';
import cors from 'cors';
import useAuthHandlers from '#app/servers/http/handlers/auth';
// TODO: 1. import the profile handler
// import useProfileHandlers from '#app/servers/http/handlers/profile';
import { errorHandler } from '#app/servers/http/middlewares/errors';

export default ({ }, config) => {
    const app = express();
    const auth = useAuthHandlers({}, config.http);
    // TODO: 2. init the profile handlers 
    // const profile = useProfileHandlers({}, config.http);

    app.use(express.json());
    app.use(cors(config.http.cors));
    app.use('/v1/auth', auth.router());
    // TODO: 3. init the router to the path
    // app.use('/v1/profile', profile.router());
    app.use(errorHandler);

    function run() {
        app.listen(config.http.port, () => {
            console.log(`The server is running on port ${config.http.port}`);
        });
    }

    return {
        run,
    };
};
