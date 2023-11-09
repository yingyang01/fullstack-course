import { Schema } from 'mongoose';

export default (connection) => {
    const UserModel = connection.model('User', new Schema({
        username: String,
        password: String,
    }));


    async function getUser(username, password) {
        let user;

        try {
            user = await UserModel.where({
                username,
                password,
            }).findOne();
        } catch (error) {
            throw new Error(error);
        }

        return user;
    }

    async function createUser(username, password) {
        try {
            const user = new UserModel({
                username,
                password,
            });
            await user.save();
        } catch (error) {
            throw new Error(error);
        }

        return true;
    }

    return {
        getUser,
        createUser,
    };
}