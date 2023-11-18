import 'dotenv/config';
import useServers from '#app/di/servers';
// TODO: 1. new dependency
// import useServices from '#app/di/services';

// TODO: 2. use services
// const { authService } = useServices({}, {
//     jwt: {
//         secret: process.env.JWT_SECRET,
//         algorithms: process.env.JWT_ALGORITHMS.split(','),
//     },
// });

const servers = useServers({
    // TODO: 3. inject the service to API layer
    // authService
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