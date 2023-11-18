import jwt from 'jsonwebtoken';
import { useAuthValidationSchema, ValidationError } from '#app/utils/validation';

export default ({
    // TODO: 12. get from outside
    // userRepo,
}, config) => {
    const validateSchema = useAuthValidationSchema();

    async function login(username, password) {
        const auth = await validateSchema.validate({
            username,
            password,
        });

        // TODO: 13. get from repo
        // const user = await userRepo.getUser(auth.username, auth.password);
        // if (!user) {
        //     throw new ValidationError('unable to find the user');
        // }

        const token = jwt.sign({
            user: {
                // TODO: 14. input with values from db
                // id: user.id, username: user.username
            },
        }, config.secret, { algorithm: config.algorithms[0] });

        return {
            token,
            status: true,
        };
    }

    async function register(username, password) {
        const auth = await validateSchema.validate({
            username,
            password,
        });

        // TODO: 15. create user by using repo
        // const status = await userRepo.createUser(auth.username, auth.password);

        return status;
    }

    return {
        login,
        register,
    }
}