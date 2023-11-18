import 'dotenv/config';
import useServers from '#app/di/servers';
import useServices from '#app/di/services';

const {
    authService,
    profileService,
    // TODO: 1. get portfolio service
    // portfolioService,
} = useServices({}, {
    jwt: {
        secret: process.env.JWT_SECRET,
        algorithms: process.env.JWT_ALGORITHMS.split(','),
    },
});

const servers = useServers({
    authService,
    profileService,
    // TODO: 2. inject portfolio service
    // portfolioService,
}, {
    http: {
        port: process.env.APP_PORT,
        jwt: {
            secret: process.env.JWT_SECRET,
            algorithms: process.env.JWT_ALGORITHMS.split(','),
        },
        cors: {
            origin: process.env.CORS_ORIGIN,
        },
    },
});

servers.run();