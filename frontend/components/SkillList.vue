<script setup>
// TODO: 1. ออกแบบ Props ของ Component นี้
// defineProps({
//     skills: Array,
//     canEdit: Boolean,
// });

// TODO: 2. รู้จัก Emit
// defineEmits(['edit']);
</script>

<template>
    <!-- TODO: 3. รู้จัก conditional rendering -->
    <!-- TODO: 4. รู้จัก emits -->
    <!-- <h2 class="text-xl font-bold mb-3 flex justify-between">
        <span>Skills</span>
        <BaseButton
            v-if="canEdit"
            size="small"
            variant="secondary"
            @click="$emit('edit')"
        >
            Edit
        </BaseButton>
    </h2>
    <BaseBadgeList
        v-if="skills.length > 0"
        :badges="skills"
    />
    <span
        v-else
        class="text-grey"
    >
        None
    </span> -->
</template>