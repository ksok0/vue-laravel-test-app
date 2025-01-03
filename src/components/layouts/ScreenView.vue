<script setup>
import { useMenu } from "@/stores/menuControl";
import { RouterView } from "vue-router";
import NavbarView from "./NavbarView.vue";
import SidebarView from "./SidebarView.vue";

const menuStore = useMenu();
</script>

<template>
  <div class="flex flex-row justify-start items-start">
    <!-- Block Side-bar -->
    <aside
      class="ease-in-out duration-1000 fixed top-0 left-0 z-50"
      :class="menuStore.isLoadMenu ? 'w-3/12' : 'w-20 '"
    >
      <div class="w-full h-screen border-r bg-white shadow-r-1">
        <SidebarView />
      </div>
    </aside>
    <!-- End Block Sidebar -->

    <!-- Block Nav-bar -->
    <header
      class="fixed right-0 top-0 ease-in-out duration-1000 z-40"
      :class="menuStore.isLoadMenu ? 'w-9/12' : 'w-11/12'"
    >
      <nav
        class="w-7/5 h-14 flex flex-row justify-between items-center p-3 bg-white shadow-sm"
      >
        <NavbarView />
      </nav>
    </header>
    <!-- End Block Nav-bar -->

    <main class="w-full z-10">
      <!-- Scrollable Content -->
      <div class="h-full overflow-y-auto p-3">
        <RouterView />
      </div>
    </main>
  </div>
</template>
