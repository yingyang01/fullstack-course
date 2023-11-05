import express from 'express';

export const server = (config) => {
    const app = express()

    function setup() {
        app.get('/', (req, res) => {
            res.send('Hello World!')
        })
    }

    function run() {
        app.listen(config.port, () => {
            console.log(`The server is running on port ${config.port}`);
        })
    }

    return {
        setup,
        run,
    };
};



