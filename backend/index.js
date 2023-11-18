import 'dotenv/config';
import useServers from '#app/di/servers';
import useServices from '#app/di/services';
// TODO: 1 import new di
// import useRepos from '#app/di/repositories';

// TODO: 2. init new repos
// const { userRepo } = useRepos({
//     db: {
//         mongo: {
//             uri: process.env.MONGO_URI,
//         }
//     }
// });


const {
    authService,
    profileService,
    portfolioService,
} = useServices({
    // TODO: 3. inject into service layer
    // userRepo,
}, {
    jwt: {
        secret: process.env.JWT_SECRET,
        algorithms: process.env.JWT_ALGORITHMS.split(','),
    },
});

const servers = useServers({
    authService,
    profileService,
    portfolioService,
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