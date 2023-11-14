<script setup>
// TODO: 1. define props and emits
// const props = defineProps({
//     experiences: Array,
// });

// const emits = defineEmits(['submit', 'cancel']);

// TODO: 2. useForm from vee-validate
// const { handleSubmit, isSubmitting } = useForm({
//     validationSchema: useExperiencesValidationSchema(),
//     validateOnInput: true,
//     keepValuesOnUnmount: true,
//     initialValues: {
//         experiences: props.experiences,
//     }
// });

// TODO: 4. useFieldArray from vee-validate
// const { remove, prepend, fields } = useFieldArray('experiences');

// TODO: 5. implement prepend and remove
// const onAdd = () => prepend({
//     logo: '',
//     title: '',
//     company: '',
//     type: '',
//     start: '',
//     end: '',
//     skills: [],
//     detail: '',
// })

// const onRemove = (idx) => {
//     remove(idx)
// };

// TODO: 6. onSubmit
// const onSubmit = handleSubmit(values => {
//     emits('submit', values);
// })
</script>

<template>
    <!-- TODO: 7. show + new component ExperienceFormField -->
    <!-- <form @submit="onSubmit">
        <h2 class="text-xl font-bold mb-3 flex justify-between">
            <span class="space-x-2">
                <span>Experiences</span>
                <BaseButton
                    type="button"
                    size="small"
                    variant="secondary"
                    @click="onAdd"
                >
                    Add
                </BaseButton>
            </span>
            <BaseFormPanel
                :is-saving="isSubmitting"
                @cancel="$emit('cancel')"
            />
        </h2>
        <ol class="space-y-4">
            <li
                v-for="(field, idx) in fields"
                :key="field.key"
            >
                <ExperienceFormField
                    :key="idx"
                    :field="field"
                    :idx="idx"
                    @remove="onRemove"
                />
            </li>
        </ol>
    </form> -->
</template>