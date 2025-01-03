<script setup>
import studentIcon from '@/components/icons/studentIcon.vue';
import viewIcon from '@/components/icons/viewIcon.vue';
import userMoreIcon from '@/components/icons/userMoreIcon.vue';
import arrowRight2 from '@/components/icons/arrowRight2.vue';
import bookIcon from '@/components/icons/bookIcon.vue';

import { defineProps } from 'vue';

const props = defineProps({
    index: Number
});
</script>

<template>
    <div
        class="w-full min-h-44 bg-yellow-400 rounded-md shadow-md overflow-hidden relative flex flex-col justify-between bg-grid-pattern bg-grid-size group outline outline-transparent hover:outline-blue-400 duration-300 transition-all ease-in-out">
        <!-- Block Icon -->
        <div class="size-52 absolute -left-10 -top-3 text-white text-opacity-35 z-10 ">
            <component :is="studentIcon" class="size-52"></component>
        </div>
        <!-- End Block Icon -->

        <!-- Block Text -->
        <!-- Block Top -->
        <div class="p-4 flex flex-row justify-start items-center gap-3 flex-grow z-10 ">
            <!-- Image -->
            <div class="flex flex-row justify-center items-center bg-white shadow-lg rounded-full">
                <div class="size-16 rounded-full flex flex-row justify-center items-center">
                    <img src="../../assets/images/profile.png" alt="">
                </div>
            </div>
            <!-- End Image -->

            <!-- Block Infomation -->
            <ul class="w-full text-white  bg-slate-500 bg-opacity-15 p-4 rounded-md text-xs flex flex-col gap-1">
                <li class=" line-clamp-2 leading-snug">User Number 10</li>
                <li class=" line-clamp-2 leading-snug">Required Course 10</li>
                <li class=" line-clamp-2 leading-snug">Class for Advane HTML</li>
            </ul>
            <!-- End Block Infomation -->
        </div>
        <!-- End Block Top -->

        <!-- Block Bottom -->
        <div
            class="w-full flex flex-row justify-between items-center text-xs bg-red-400 z-10 text-nowrap line-clamp-1 relative shadow-t-1">
            <!-- Block Views -->
            <div class="w-full flex flex-row justify-start divide-x px-1 py-2 group-hover:translate-y-20 translate-y-0 transition-all duration-200 ease-in-out">
                <div class="flex flex-row justify-start items-center gap-1 text-white px-2">
                    <component :is='viewIcon' class="size-4 text-white"></component>
                    <p>{{ `${props.index}` }}K</p>
                </div>

                <div class="flex flex-row justify-start items-center gap-1 text-white px-2">
                    <component :is='userMoreIcon' class="size-4 text-white"></component>
                    <p>{{ `${props.index}` }}K</p>
                </div>

                <div class="flex flex-row justify-start items-center gap-1 text-white px-2">
                    <component :is='bookIcon' class="size-4 text-white"></component>
                    <p>{{ `${props.index}` }} Chapter</p>
                </div>
            </div>
            <!-- Block Views -->

            <!-- Block Button More -->
            <button
                class="px-2 text-white text-xs flex flex-row justify-end items-center active:bg-red-300 group-hover:translate-x-10 translate-x-0 ease-in-out duration-200 ">
                <!-- <p>View More</p> -->
                <component :is='arrowRight2' class="size-5"></component>
            </button>

            <button
                class="px-2 absolute right-0 text-white text-md flex flex-row justify-end items-center active:bg-red-300 group-hover:translate-x-0 translate-x-20 ease-in-out duration-200">
                View More
            </button>
            <!-- End Block Button More -->
        </div>
        <!-- End Block Bottom -->
        <!-- End Block Text -->
    </div>
</template>