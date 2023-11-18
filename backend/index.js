import 'dotenv/config';
import useServers from '#app/di/servers';
import useServices from '#app/di/services';

const {
    authService,
    // TODO: 1. get profile service from dependency injection
    // profileService,
} = useServices({}, {
    jwt: {
        secret: process.env.JWT_SECRET,
        algorithms: process.env.JWT_ALGORITHMS.split(','),
    },
});

const servers = useServers({
    authService,
    // TODO: 5. inject into the API Layer
    // profileService,
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