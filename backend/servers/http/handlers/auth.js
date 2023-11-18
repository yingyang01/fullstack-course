import express from 'express';
import asyncHandler from 'express-async-handler';

export default ({ }, config) => {
    // TODO: 19. router of auth
    function router() {
        const router = express.Router();

        // TODO: 19.5 async handler
        router.post('/login', asyncHandler(login));
        router.post('/register', asyncHandler(register));

        return router;
    }

    // TODO: 20. Login handler
    async function login(req, res) {
        res.status(200).json({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBpY2hldCBJdG5nYW0iLCJpYXQiOjE1MTYyMzkwMjJ9.mVMnU3cgNFO27o_i1xxiYptVpa3ruv1H_mKJD3qzfj0',
            status: true,
        });
    }

    // TODO: 21. Register handler
    async function register(req, res) {
        res.status(200).json({
            status: true,
        });
    }

    return {
        router,
    }
};