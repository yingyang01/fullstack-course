import express from 'express';
import asyncHandler from 'express-async-handler';

// TODO: 10. destruct authService
export default ({ }, config) => {
    function router() {
        const router = express.Router();

        router.post('/login', asyncHandler(login));
        router.post('/register', asyncHandler(register));

        return router;
    }

    async function login(req, res) {
        // TODO: 11. use service
        // const body = req.body;

        // const result = await authService.login(body.username, body.password);

        // const token = result.token;
        // const status = result.status;

        res.status(200).json({
            token,
            status,
        });
    }

    async function register(req, res) {
        // TODO: 12. use service
        // const body = req.body;

        // const status = await authService.register(body.username, body.password);

        res.status(200).json({
            status,
        });
    }

    return {
        router,
    }
};