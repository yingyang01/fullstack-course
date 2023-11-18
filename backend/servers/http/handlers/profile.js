import express from 'express';
import asyncHandler from 'express-async-handler';
import { useJwt } from '#app/servers/http/middlewares/jwt'

// TODO: 8. get from the outside
export default ({ }, config) => {

    function router() {
        const router = express.Router()

        router.get('/', asyncHandler(getProfile));
        router.patch('/', useJwt(config.jwt), asyncHandler(updateProfile));
        profileService
        return router;
    }

    async function getProfile(_, res) {
        // TODO: 9. use profile service
        // const profile = await profileService.getProfile();

        res.status(200).json({ data: profile });
    }

    async function updateProfile(req, res) {
        // TODO: 10. use profile service
        // const profile = await profileService.updateProfile(req.body);

        res.status(200).json({ status: true, id: profile.id, });
    }

    return {
        router,
    }
}