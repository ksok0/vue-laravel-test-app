<script setup>
import { useMenu } from '@/stores/menuControl';
import menuIcon from '../icons/menuIcon.vue';
import notificationIcon from '../icons/notificationIcon.vue';
import searchIcon from '../icons/searchIcon.vue';



const menuStore = useMenu();
</script>

<template>
    <!-- Block Menu Button -->
    <button v-on:click="menuStore.toggleMenu()"
        class="p-1  rounded-md border active:scale-110 ease-in-out duration-200 active:bg-zinc-200">
        <component :is="menuIcon" class="w-7 h-7"></component>
    </button>
    <!-- End Block Menu Button -->


    <div class="flex flex-row justify-end items-center gap-4">

        <!-- Block Icon -->

        <!-- Block Search Bar -->
        <div class="relative">
            <input type="text" placeholder="Search..."
                class="p-2 pr-14 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button class="absolute right-2 top-1/4 active:scale-110 active:text-blue-600">
                <component :is="searchIcon" class="w-5 h-5"></component>
            </button>
        </div>
        <!-- End Block Search -->

        <!-- Notification -->

        <div class=" relative">
            <button class="p-1 rounded-md border active:scale-110 ease-in-out duration-200 active:bg-zinc-200 ">
                <component :is="notificationIcon" class="w-7 h-7"></component>
            </button>
            <!-- Msg -->
            <span
                class="rounded-full bg-red-500  absolute top-0 left-6 text-white px-[6px] h-5 flex flex-row justify-center items-center text-center text-sm font-poppins">
                <p>{{ 0 }}</p>
            </span>
            <!-- End Msg -->
        </div>
        <!-- End Notification -->

        <!-- Profile -->
        <div class="flex flex-row justify-end gap-3 items-center">
            <!-- Block Name -->
            <p class=" max-md:hidden">Jonh San</p>
            <!-- End Block Name -->
            <div class=" size-10">
                <div class="size-10 rounded-full active:border bg-blue-500">
                    <img src="../../assets/images/profile.png" alt="Error" class=" object-cover size-10 ">
                </div>
            </div>
        </div>
        <!-- End Profile -->

        <!-- End Block Icon -->
    </div>
</template>