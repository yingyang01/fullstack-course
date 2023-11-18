import { useProfileValidationSchema } from '#app/utils/validation';

export default ({
    // TODO: 8. get from outside
    // profileRepo
}) => {
    const validateSchema = useProfileValidationSchema();

    function sanitizeProfile(profile) {
        const output = {};

        if (profile.overallSkills) {
            output.overallSkills = profile.overallSkills;
        }

        if (profile.experiences) {
            output.experiences = profile.experiences;
        }

        return output;
    }

    async function getProfile() {
        // TODO: 9. use repo
        let profile;


        // profile = await profileRepo.getProfile();

        // if (!profile) {
        //     return {
        //         overallSkills: [],
        //         experiences: [],
        //     };
        // }

        return {
            overallSkills: profile.overallSkills ?? [],
            experiences: profile.experiences ?? [],
        };
    }

    async function updateProfile(newProfile) {
        let id;

        const profile = await validateSchema.validate(newProfile);

        const sanitizedProfile = sanitizeProfile(profile);

        // TODO: 10. use repo

        // const updatedProfile = await profileRepo.updateProfile(sanitizedProfile);

        // id = updatedProfile.id;

        return {
            id,
        };
    }

    return {
        getProfile,
        updateProfile,
    };
}