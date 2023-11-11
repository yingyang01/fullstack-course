<script setup>
// TODO: 2. emit พร้อมค่าจาก form
// const emits = defineEmits(['submit']);

// TODO: 3. ใช้ composable จาก vee-validate เพื่อจัดการกับ form
// TODO: 4. validate โดยใช้ yup
// const { handleSubmit, isSubmitting } = useForm({
//     validationSchema: useLoginValidationSchema(),
//     validateOnInput: true,
// });

// const onSubmit = handleSubmit(values => {
//     emits('submit', values);
// })
</script>

<template>
    <!-- TODO: 5. นำมาใช้งาน แต่จะยังไม่สามารถใช้งานได้ เดี๋ยวเรามาทำ Input กับ Error Message Component กันต่อ -->
    <!-- <form
        @submit="onSubmit"
        class="space-y-3"
    >
        <div>
            <input
                v-bind="username"
                name="username"
                placeholder="Username"
            />
        </div>
        <div>
            <input
                v-bind="password"
                name="password"
                type="password"
                placeholder="Password"
            />
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
    </form> -->
</template>