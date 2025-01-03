<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>


<template>
    <div>
        <div class="container w-full bg-white shadow-md p-3 rounded-sm">
            <h1 class="capitalize font-medium">{{ route.path }}</h1>
        </div>
    </div>
</template>