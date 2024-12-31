<script setup>
import { useMenu } from "@/stores/menuControl";
import { RouterView } from "vue-router";
import NavbarView from "./NavbarView.vue";
import SidebarView from "./SidebarView.vue";

const menuStore = useMenu();
</script>

<template>
  <div class="flex flex-row justify-start items-start bg-slate-50">
    <!-- Block Side-bar -->
    <aside
      class="ease-in-out duration-1000 z-50"
      :class="menuStore.isLoadMenu ? 'w-72' : 'w-16'"
      aria-label="Sidebar"
    >
      <div class="w-full h-screen border-r bg-white shadow-r-1">
        <SidebarView />
      </div>
    </aside>
    <!-- End Block Sidebar -->
    <main class="w-full max-h-screen overflow-y-auto">
      <!-- Block Nav-bar -->
      <nav
        class="flex flex-row justify-between items-center  bg-white shadow-md py-2 px-3 fixed top-0 right-0 ease-in-out duration-1000"
        :class="menuStore.isLoadMenu ? 'w-[87%]' : 'w-[97%]'"
        aria-label="Navigation"
      >
        <NavbarView />
      </nav>
      <!-- End Block Nav-bar -->
      <div class="mt-14 p-2">
        <RouterView />
      </div>
    </main>
  </div>
</template>
