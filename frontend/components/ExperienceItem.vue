<script setup>
import moment from 'moment';

const props = defineProps({
    experience: Object,
});

const experienceType = computed(() => useExperienceType(props.experience.type));

const start = computed(() => moment(props.experience.start).format('MMM YYYY'))
const end = computed(() => props.experience.end ? moment(props.experience.end).format('MMM YYYY') : 'Present')
const diff = computed(() => props.experience.end ? Math.ceil(moment(props.experience.end).diff(moment(props.experience.start), 'months', true)) : Math.ceil(moment(new Date()).diff(moment(props.experience.start), 'months', true)))
</script>

<template>
    <div class="md:flex md:space-x-2">
        <div class="flex space-x-3 md:flex-1">
            <div>
                <BaseImage
                    :url="experience.logo"
                    class="w-10 h-10 rounded-md"
                />
            </div>
            <div class="text-sm flex-1 md:text-base">
                <h3 class="font-bold text-base md:text-lg">
                    {{ experience.title }}
                </h3>
                <div>

                    <span>{{ experience.company }}</span>
                    <span> · </span>
                    <span>{{ experienceType }}</span>
                </div>
                <div>
                    <span>
                        {{ start }} - {{ end }} · {{ diff }} month(s)</span>
                </div>

                <div class="py-3 md:hidden">
                    <span class="whitespace-pre">{{ experience.detail }}</span>
                </div>
                <BaseBadgeList :badges="experience.skills" />
            </div>
        </div>
        <div class="hidden md:block md:flex-1">
            <span class="whitespace-pre">{{ experience.detail }}</span>
        </div>
    </div>
</template>