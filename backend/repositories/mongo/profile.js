import { Schema } from 'mongoose';

export default (connection) => {
    // TODO: 11. define schema
    // const ProfileModel = connection.model('Profile', new Schema({
    //     overallSkills: [String],
    //     experiences: [
    //         {
    //             title: String,
    //             logo: String,
    //             company: String,
    //             type: {
    //                 type: String,
    //             },
    //             start: Date,
    //             end: Date,
    //             skills: [String],
    //             detail: String,
    //         }
    //     ]
    // }));

    // TODO: 12. return only necessary data
    // function toProfile(profile) {
    //     return {
    //         id: profile.id,
    //         overallSkills: profile.overallSkills,
    //         experiences: profile.experiences,
    //     }
    // }

    // TODO: 13. implement get profile
    // async function getProfile() {
    //     let profile;

    //     try {
    //         profile = await ProfileModel.where({}).findOne();
    //     } catch (error) {
    //         throw new Error(error);
    //     }

    //     return toProfile(profile);
    // }

    // TODO: 14. implement update profile
    // async function updateProfile(newProfile) {
    //     let profile;

    //     try {
    //         const update = {
    //             $set: newProfile,
    //         };

    //         profile = await ProfileModel.findOneAndUpdate({}, update, {
    //             new: true,
    //             upsert: true,
    //         });
    //     } catch (error) {
    //         throw new Error(error);
    //     }

    //     return toProfile(profile);
    // }

    // return {
    //     getProfile,
    //     updateProfile,
    // };
}