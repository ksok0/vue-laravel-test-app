<script setup>
import { useDarkStore } from '../stores/darkMode';
import SettingSlot from '@/components/slot/SettingSlot.vue';
import editIcon from '@/components/icons/editIcon.vue';
import scanSecurityIcon from '@/components/icons/scanSecurityIcon.vue';
import arrowRightIcon from '@/components/icons/arrowRightIcon.vue';
import worldIcon from '@/components/icons/worldIcon.vue';
import arrowMore from '@/components/icons/arrowMore.vue';
import logoutIcon from '@/components/icons/logoutIcon.vue';
import telegramIcon from '@/components/icons/telegramIcon.vue';
import userCardIcon from '@/components/icons/userCardIcon.vue';
import dateIcon from '@/components/icons/dateIcon.vue';
import EmailIcon from '@/components/icons/emailIcon.vue';
import infoIcon from '@/components/icons/infoIcon.vue';
import computerIcon from '@/components/icons/computerIcon.vue';

import { useRouter } from 'vue-router';
import {ref} from 'vue';
import { DarkMode } from '@/stores/darkMode';

const isShow = ref(false);

const darkStore = useDarkStore();

const router = useRouter();

const toggleRouter=(name)=>{
    router.push({name: name});
}

const toggleShow = () => {
    isShow.value = !isShow.value;
}
</script>

<template>
    <div class="w-full flex flex-row max-sm:flex-col items-start gap-2">
        <!-- Block Profile -->
        <div class="w-full min-w-[calc(100%-45%)] bg-white p-4 rounded-md shadow-md">
            <!-- Title Header -->
            <h1 class=" font-medium text-lg">Information your Account</h1>
            <!-- End Title Header -->

            <!-- Image Profile -->
                <div class="mt-4 w-full min-h-52 border rounded-md p-4 flex flex-row justify-center items-center">
                    <div class=" border-4 border-red-500 rounded-full bg-white ring-4 shadow-lg ">
                        <img src="../assets/images/profile.png" class=" size-32 object-cover" alt="Error">
                    </div>
                </div>
            <!-- End Image Profile -->

            <!-- List Information -->
                <div class="w-full mt-4 flex flex-col divide-y">
                    <!-- Users -->
                    <SettingSlot :icon="userCardIcon" :title="'Name'" :body="'Jonh San'" :color="'bg-blue-400'" class="py-2"/>
                    <!-- End Users -->

                     <!-- Email -->
                     <SettingSlot :icon="EmailIcon" :title="'Email'" :body="'jonh@gmail.com'" :color="'bg-red-400'" class="py-2"/>
                    <!-- End Email -->

                    <!-- Date -->
                    <SettingSlot :icon="dateIcon" :title="'Date'" :body="'01-01-2025'" :color="'bg-green-500'" class="py-2"/>
                    <!-- End Date -->

                    <!-- Telegram -->
                    <SettingSlot :icon="telegramIcon" :title="'Telegram'" :body="'000-000-000'" class="py-2"/>
                    <!-- End Telegram -->
                </div>
            <!-- End List Information -->
        </div>
        <!-- End Block Profile -->

        <!-- =============================================================================================================== -->

        <!-- Block Settings -->
        <div class="w-full min-w-1/3  bg-white p-4 rounded-md shadow-md">
            <!-- Title Header -->
            <h1 class=" font-medium text-lg">Settings</h1>
            <!-- End Title Header -->

            <!-- Block Lsit Controller -->
            <div class="flex flex-col  justify-start items-start mt-4 divide-y">
                <!-- section Edit Profile -->
                <button v-on:click="toggleRouter('edit-profile')"
                    class="w-full flex flex-row justify-between items-center hover:bg-slate-100  active:bg-slate-300 p-2 group">
                    <!-- Block Information -->
                    <SettingSlot :icon="editIcon" :color="'bg-blue-400'" :title="'Edit Profile'"
                        :body="'This is Button for Change or Edit your Profile'" />
                    <!-- End Block Information -->

                    <!-- Icon Arrow -->
                    <div class="size-7 group-active:translate-x-2 ease-in-out duration-200">
                        <component :is="arrowRightIcon" class="size-7"></component>
                    </div>
                    <!-- End Icon Arrow -->
                </button>
                <!-- End section Edit Profile -->

                <!-- section Change Password -->
                <button v-on:click="toggleRouter('edit-password')"
                    class="w-full flex flex-row justify-between items-center hover:bg-slate-100  active:bg-slate-300 p-2 group ">
                    <!-- Block Information -->
                    <SettingSlot :icon="scanSecurityIcon" :color="'bg-red-400'" :title="'Change Password'"
                        :body="'This is Button for Change or Edit your Password'" />
                    <!-- End Block Information -->

                    <!-- Icon Arrow -->
                    <div class="size-7 group-active:translate-x-2 ease-in-out duration-200">
                        <component :is="arrowRightIcon" class="size-7"></component>
                    </div>
                    <!-- End Icon Arrow -->
                </button>
                <!-- End Change Password  -->

                <!-- section Dark Mode -->
                <section class="w-full flex flex-row justify-between items-center gap-2 p-2">
                    <!-- Block Information -->
                    <SettingSlot :icon="computerIcon" :color="'bg-yellow-400'" :title="'Dark Mode'"
                        :body="'This is Button for use Dark Mode'" />
                    <!-- End Block Information -->

                    <!-- Block List Menu Dark Mode -->
                    <div class="relative text-sm text-gray-600">
                        <button v-on:click="toggleShow"
                            class="px-3 py-2 min-w-24  border rounded-md flex flex-row justify-between items-center active:scale-110 hover:bg-slate-100 ease-in-out duration-200">
                            <p>{{darkStore.darkMode}}</p>

                            <!-- Icon -->
                            <component :is="arrowMore" class="size-5 fill-none"></component>
                            <!-- End Icon -->
                        </button>

                        <!-- Block List Option Dark Mode -->
                        <ul
                        v-show="isShow"
                            class="min-w-24 rounded-md border flex-col justify-start items-start absolute left-0 bg-white top-9 z-40">
                            <li
                                v-on:click="darkStore.toggleDarkMode(DarkMode.dark)"
                                class="p-2 w-full hover:bg-slate-100 active:bg-slate-200 cursor-pointer bg-blue-400 rounded-md text-white ">
                                Dark</li>
                            <li 
                                v-on:click="darkStore.toggleDarkMode(DarkMode.light)"
                            class="p-2 w-full hover:bg-slate-100 active:bg-slate-200 cursor-pointer rounded-md">
                                Light</li>
                            <li 
                                v-on:click="darkStore.toggleDarkMode(DarkMode.system)"
                            class="p-2 w-full hover:bg-slate-100 active:bg-slate-200 cursor-pointer rounded-md">
                                System</li>
                        </ul>
                        <!-- End Block List Option Dark Mode -->
                    </div>
                    <!-- End Block List Menu Dark Mode -->
                </section>
                <!-- End section Dark Mode -->


                <!-- section Language -->
                <section class="w-full flex flex-row justify-between items-center gap-2 p-2">
                    <!-- Block Information -->
                    <SettingSlot :icon="worldIcon" :color="'bg-blue-500'" :title="'Language'"
                        :body="'This is Button for use Dark Mode'" />
                    <!-- End Block Information -->

                    <!-- Block List Menu Language -->
                    <div class="relative text-sm text-gray-600">
                        <button
                            class="px-3 py-2 min-w-24  border rounded-md flex flex-row justify-between items-center active:scale-110 hover:bg-slate-100 ease-in-out duration-200">
                            <p>{{ "English" }}</p>

                            <!-- Icon -->
                            <component :is="arrowMore" class="size-5 fill-none"></component>
                            <!-- End Icon -->
                        </button>

                        <!-- Block List Option Language -->
                        <ul
                            class="min-w-24 rounded-md border flex-col justify-start items-start absolute left-0 bg-white top-9 hidden">
                            <li
                                class="p-2 w-full hover:bg-slate-100 active:bg-slate-200 cursor-pointer bg-blue-400 rounded-md text-white ">
                                English</li>
                            <li class="p-2 w-full hover:bg-slate-100 active:bg-slate-200 cursor-pointer rounded-md">
                                Khmer</li>

                        </ul>
                        <!-- End Block List Option Language -->
                    </div>
                    <!-- End Block List Menu Language -->
                </section>
                <!-- End section Language -->

                <!-- section Change About -->
                <RouterLink :to="{name: 'about'}"
                    class="w-full flex flex-row justify-between items-center hover:bg-slate-100  active:bg-slate-300 p-2 group ">
                    <!-- Block Information -->
                    <SettingSlot :icon="infoIcon" :color="'bg-green-500'" :title="'About'"
                        :body="'Read more information'" />
                    <!-- End Block Information -->

                    <!-- Icon Arrow -->
                    <div class="size-7 group-active:translate-x-2 ease-in-out duration-200">
                        <component :is="arrowRightIcon" class="size-7"></component>
                    </div>
                    <!-- End Icon Arrow -->
                </RouterLink>
                <!-- End Change About  -->


            </div>
            <!-- End Block List Controller -->

            <!-- Title -->
            <h1 class=" font-medium text-lg mt-4">Controller</h1>
            <!-- End Title -->
            <div class="flex flex-col  justify-start items-start mt-4 divide-y">
                <!-- section Edit Profile -->
                <button
                    class="w-full flex flex-row justify-between items-center hover:bg-slate-100  active:bg-slate-300 p-2 group">
                    <!-- Block Information -->
                    <SettingSlot :icon="logoutIcon" :color="'bg-red-500'" :title="'Logout'"
                        :body="'This is Button for Logout Account'" />
                    <!-- End Block Information -->

                    <!-- Icon Arrow -->
                    <div class="size-7 group-active:translate-x-2 ease-in-out duration-200">
                        <component :is="arrowRightIcon" class="size-7"></component>
                    </div>
                    <!-- End Icon Arrow -->
                </button>
                <!-- End section Edit Profile -->
            </div>
        </div>
        <!-- End Block Setting -->
    </div>
</template>