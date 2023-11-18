import express from 'express';
import cors from 'cors';
// import useAuthHandlers from '#app/servers/http/handlers/auth';
import useProfileHandlers from '#app/servers/http/handlers/profile';
import usePortfolioHandlers from '#app/servers/http/handlers/portfolio';
import { errorHandler } from '#app/servers/http/middlewares/errors';

// TODO: 8. inject authService
export default ({ }, config) => {
    const app = express();
    // TODO: 9. pass authService
    // const auth = useAuthHandlers({ authService }, config.http);
    const profile = useProfileHandlers({}, config.http);
    const portfolio = usePortfolioHandlers({}, config.http);

    app.use(express.json());
    app.use(cors(config.http.cors));
    app.use('/v1/auth', auth.router());
    app.use('/v1/profile', profile.router());
    app.use('/v1/portfolios', portfolio.router());
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
