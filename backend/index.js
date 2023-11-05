import { server } from './handlers/server.js';

const apiServer = server({
    port: 8000,
});

apiServer.setup();

apiServer.run();