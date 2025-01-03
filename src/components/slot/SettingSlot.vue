<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    icon: {
        type: [Object, String],
        required: true
    },
    color: {
        type: String,
        default: "bg-blue-400"
    },
    title: {
        type: String,
        required: true,
        default: 'No required title!'
    },
    body: {
        type: String
    }
});

</script>

<template>
    <div class="flex flex-row justify-start items-center gap-3">
        <!-- Block Icon -->
        <div class="p-2 rounded-md  text-white relative shadow-md" :class="`${props.color}`">
            <div class="size-7">
                <component v-if="props.icon" :is="props.icon"></component>
                <!-- error msg -->
                <p v-else class="p-2 bg-purple-600 text-white absolute top-0 left-0 text-sm text-nowrap rounded-sm">No
                </p>
            </div>
        </div>
        <!-- End Block Icon -->

        <!-- Block Title -->
        <div class="flex flex-col justify-center items-start leading-5 space-y-0">
            <h1 class=" font-medium text-base">{{ props.title }}</h1>
            <p v-if="props.body" class=" font-normal text-sm text-start text-gray-500 line-clamp-1">{{ props.body }}</p>
        </div>
        <!-- End Block Title -->
    </div>
</template>