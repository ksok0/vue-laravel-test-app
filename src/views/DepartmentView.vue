<script setup>
import { useRoute, useRouter } from 'vue-router';
import ButtonSlot from '@/components/slot/ButtonSlot.vue';
import addIcon from '@/components/icons/addIcon.vue';
const route = useRoute();
const router = useRouter();


</script>

<template>
    <div class=" flex flex-col items-center justify-center w-full gap-4">
        <div
            class="container flex flex-row justify-between items-center bg-white shadow-md p-4 rounded-md relative text-nowrap">
            <button @click="router.go(-1)"
                class="p-2 bg-red-500 hover:bg-red-600 active:scale-110 ease-in-out duration-200 rounded-sm shadow-md text-white">Back</button>
            <h1 class="w-full text-center font-semibold text-balance line-clamp-1">Department Veiw Page</h1>
            <span class="p-2"></span>

            <ButtonSlot
                class="p-2 flex items-center space-x-2 shadow-lg rounded-sm bg-blue-500 hover:bg-blue-400 active:scale-110 ease-in-out duration-200 text-white">
                <template #icon>
                    <component :is="addIcon" class="w-7 h-7 " />
                </template>
                <span class="max-lg:hidden ">Add Department</span>
            </ButtonSlot>

        </div>

        <!-- =============================================== -->

        <div class="w-full columns-2 max-md:columns-1 space-y-4">
            <div class="w-full h-52 bg-red-500"></div>
            <div class="w-full h-52 bg-yellow-500">
                <p>{{ route.params.id }}</p>
            </div>
        </div>
    </div>


</template>