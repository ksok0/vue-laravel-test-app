import { defineStore } from "pinia";

export const useMenu = defineStore('menu', {
    state: () => ({
        isLoadMenu: false,
        isLowText: false,
    }),

    actions: {
        toggleMenu() {
            this.isLoadMenu = !this.isLoadMenu;
            this.lowText(this.isLoadMenu);
        },

        lowText(isLoadMenu){
            if(isLoadMenu == true)
            {
                setTimeout(()=>{
                    this.isLowText = this.isLoadMenu
                }, 500)
            }else{
                this.isLowText = this.isLoadMenu
            }
        }
    }
})
