<script setup>
// TODO: 1. design props
// const props = defineProps({
//     skills: Array,
// })

// TODO: 2. design emits
// const emits = defineEmits(['submit', 'cancel']);

// TODO: 3. use vee-validate composables
// const { handleSubmit, isSubmitting } = useForm({
//     validationSchema: useSkillsValidationSchema(),
//     validateOnInput: true,
//     // TODO: 4. keep the values on unmount
//     keepValuesOnUnmount: true,
//     // TODO: 5. Set the initial values
//     initialValues: {
//         skills: props.skills,
//     }
// });

// TODO: 6. handle submitting
// const onSubmit = handleSubmit(values => {
//     emits('submit', values);
// })
</script>

<template>
    <!-- TODO: 7. show -->
    <!-- <form @submit="onSubmit">
        <h2 class="text-xl font-bold mb-3 flex justify-between">
            <span>Skills</span>
            <BaseFormPanel
                :is-saving="isSubmitting"
                @cancel="$emit('cancel')"
            />
        </h2>
        <BaseInputTags
            name="skills"
            placeholder="Input you skills"
        />
    </form> -->
</template>