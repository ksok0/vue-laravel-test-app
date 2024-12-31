<script setup>
import { useMenu } from '@/stores/menuControl';
import { RouterLink } from 'vue-router';

import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

const menuStore = useMenu();

const route = useRoute();

const props = defineProps({
    icon: {
        type: [Object, String],
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: false,
    },
});
</script>

<template>
    <RouterLink :to="{ name: props.path }"
        class="flex flex-row justify-start items-center gap-2 py-2 px-2 rounded-sm  ease-in-out duration-300"
        :class="route.name == props.path ? 'text-white bg-blue-700 shadow-md shadow-slate-400' : 'text-blue-700 border-t-transparent '"
    >
        <!-- Icon -->
        <component :is="props.icon" class="w-6 h-6" />
        <!-- End Icon -->

        <!-- Conditionally Render Title -->
        <p v-if="menuStore.isLowText">{{ props.title }}</p>
        <!-- You can replace `menuStore.isLoadMenu` with any other condition to show/hide the title -->
    </RouterLink>
</template>
