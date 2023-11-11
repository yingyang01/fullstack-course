<script setup>
const emits = defineEmits(['submit']);

const { handleSubmit, isSubmitting } = useForm({
    validationSchema: useLoginValidationSchema(),
    validateOnInput: true,
});

const onSubmit = handleSubmit(values => {
    emits('submit', values);
})
</script>

<template>
    <form
        @submit="onSubmit"
        class="space-y-3"
    >
        <div>
            <!-- TODO: 6. มาใช้กับ username -->
            <!-- <BaseInput
                name="username"
                placeholder="Username"
            /> -->
        </div>
        <div>
            <!-- TODO: 7. มาใช้กับ password -->
            <!-- <BaseInput
                name="password"
                type="password"
                placeholder="Password"
            /> -->
        </div>
        <div>
            <BaseButton
                v-if="!isSubmitting"
                class="w-full"
                size="small"
                type="submit"
            >
                Log In
            </BaseButton>
            <BaseButton
                v-else
                class="w-full"
                size="small"
                variant="disabled"
                type="submit"
                disabled
            >
                Logging In
            </BaseButton>
        </div>
    </form>
</template>