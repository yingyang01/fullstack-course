// TODO: 16. use schema from mongoose
// import { Schema } from 'mongoose';
// TODO: 17. use mongoose-bcrypt to enable bcrypt
// import mongooseBcrypt from 'mongoose-bcrypt';

export default (connection) => {
    // TODO: 18. define the user schema
    // const UserSchema = new Schema({
    //     username: String,
    //     password: { type: String, bcrypt: true },
    // });

    // TODO: 19. use plugin
    // UserSchema.plugin(mongooseBcrypt);

    // TODO: 20. init the model
    // const UserModel = connection.model('User', UserSchema);

    // TODO: 21. implement get user
    // async function getUser(username, password) {
    //     let user;

    //     try {
    //         const foundedUser = await UserModel.where({
    //             username,
    //         }).findOne();

    //         if (!foundedUser) {
    //             return user;
    //         }

    //         const verifiedPassword = await foundedUser.verifyPassword(password);

    //         if (verifiedPassword) {
    //             user = foundedUser;
    //         }
    //     } catch (error) {
    //         throw new Error(error);
    //     }

    //     return user;
    // }

    // TODO: 22. implement create user
    // async function createUser(username, password) {
    //     try {
    //         const user = new UserModel({
    //             username,
    //             password,
    //         });
    //         await user.save();
    //     } catch (error) {
    //         throw new Error(error);
    //     }

    //     return true;
    // }

    // return {
    //     getUser,
    //     createUser,
    // };
}