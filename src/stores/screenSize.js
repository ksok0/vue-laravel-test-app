import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted } from 'vue';

export const useScreenSizeStore = defineStore('screenSize', () => {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const updateSize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  // Add event listener when the store is used
  onMounted(() => {
    window.addEventListener('resize', updateSize);
  });

  // Cleanup event listener when the store is destroyed
  onUnmounted(() => {
    window.removeEventListener('resize', updateSize);
  });

  return { width, height };
});
