// TODO: 3. import defineStore
// import { defineStore } from 'pinia';
// TODO: 4. import auth for token sending
// import { useAuthStore } from '@/stores/auth'
// TODO: 5. import profile repo
// import { getProfileAPI, saveProfileAPI } from '@/repositories/profile';

export const useProfileStore = defineStore('profile', () => {
    // TODO: 6. define states of profile
    // const profile = ref({
    //     overallSkills: [],
    //     experiences: [],
    // });

    // TODO: 7. edit mode of skills
    // const skillsEditMode = ref(false);

    // TODO: 8. implement get profile action
    // async function getProfile() {
    //     try {
    //         const { data: response, error, status } = await getProfileAPI();
    //         if (status == 'error') {
    //             throw new Error(error);
    //         }

    //         profile.value = response.value;
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // }

    // TODO: 9. implement save skills
    // async function saveSkills(draftedSkills) {
    //     const authStore = useAuthStore();

    //     try {
    //         const { data: response, error, status } = await saveProfileAPI({ overallSkills: draftedSkills.skills }, authStore.token);
    //         if (status == 'error') {
    //             throw new Error(error);
    //         }

    //         if (response.value.status) {
    //             skillsEditMode.value = false;

    //             profile.value.overallSkills = draftedSkills.skills;
    //         }

    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // }

    // TODO: 10. implement mode toggler
    // function enterSkillsEditMode() {
    //     skillsEditMode.value = true;
    // }

    // function enterSkillsViewMode() {
    //     skillsEditMode.value = false;
    // }

    return {
        // TODO: 11. return all
        // profile,
        // skillsEditMode,
        // getProfile,
        // saveSkills,
        // enterSkillsEditMode,
        // enterSkillsViewMode,
    }
})