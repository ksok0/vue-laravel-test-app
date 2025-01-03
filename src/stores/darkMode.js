// src/stores/darkMode.js

// Enum for Dark Mode
export const DarkMode = {
  light: 'light',
  dark: 'dark',
  system: 'system'
};

// Pinia store for managing dark mode
import { defineStore } from 'pinia';

export const useDarkStore = defineStore('dark', {
  state: () => ({
    darkMode: DarkMode.system, // Default mode is system
  }),

  actions: {
    // Toggle between dark and light modes
    toggleDarkMode() {
      this.darkMode = this.darkMode === DarkMode.dark ? DarkMode.light : DarkMode.dark;
      this.saveToLocalStorage();
    },

    // Set the theme explicitly (light, dark, or system)
    setDarkMode(mode) {
      this.darkMode = mode;
      this.saveToLocalStorage();
    },

    // Save the current theme to localStorage
    saveToLocalStorage() {
      localStorage.setItem('darkMode', this.darkMode);
    },

    // Load the theme from localStorage when the store is initialized
    loadFromLocalStorage() {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme && Object.values(DarkMode).includes(savedTheme)) {
        this.darkMode = savedTheme;
      }
    }
  },

  // Call loadFromLocalStorage on store initialization
  persist: true, // Optional, if you want pinia persistence
});
