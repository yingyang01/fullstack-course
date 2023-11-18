// TODO: 1. import dotenv เพื่อ import .env มาเป็น process.env
// import 'dotenv/config';
// TODO: 2. import dependency inject (servers)
// TODO: 3. อธิบาย #app
// import useServers from '#app/di/servers';

// TODO: 4. เรียกใช้ dependency inject สามารถออกแบบไว้ก่อนว่าจะเป็นยังไงโดยไม่ต้องรอมี function จริง
// const servers = useServers({}, {
//     http: {
//         // TODO: 5. opened port for receiving requests
//         port: process.env.APP_PORT,
//         // TODO: 6. JWT เดี๋ยวจะอธิบายต่อตอนทำ service auth
//         jwt: {
//             secret: process.env.JWT_SECRET,
//             algorithms: process.env.JWT_ALGORITHMS.split(','),
//         },
//         // TODO: 7. CORS (Cross-origin resource sharing)
//         cors: {
//             origin: process.env.CORS_ORIGIN,
//         },
//     },
// });

// TODO: 8. เรียก run เพื่อสั่ง start server
// servers.run();