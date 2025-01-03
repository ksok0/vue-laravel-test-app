<script setup>

</script>

<template>
    <button class="p-2 flex items-center space-x-2">
        <!-- Icon Slot -->
        <slot name="icon"></slot>

        <!-- Title Slot -->
        <slot>Default Button</slot>
    </button>
</template>
