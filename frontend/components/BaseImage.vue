<script setup>
// TODO: 7. ป้องกัน fallthrough
defineOptions({
    inheritAttrs: false,
});

defineProps({
    url: String,
})
</script>

<template>
    <!-- TODO: 8. ป้องกัน image ที่ไม่ใช่ url -->
    <!-- TODO: 9. รู้จัก default ของ slot -->
    <!-- TODO: 10. บังคับ fallthrough ไปลงเฉพาะที่ -->
    <img
        v-if="useIsValidUrl(url)"
        :src="url"
        v-bind="$attrs"
    >
    <slot
        v-else
        name="placeholder"
    >
        <IconPlaceholder v-bind="$attrs" />
    </slot>
</template>