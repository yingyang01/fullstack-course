import { Schema } from 'mongoose';
import mongooseBcrypt from 'mongoose-bcrypt';

export default (connection) => {
    const UserSchema = new Schema({
        username: String,
        password: { type: String, bcrypt: true },
    });

    UserSchema.plugin(mongooseBcrypt);

    const UserModel = connection.model('User', UserSchema);

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