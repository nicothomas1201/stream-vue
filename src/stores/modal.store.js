import { defineStore } from "pinia";

export default defineStore('modal-state', {
  state: () => ({
    show: true,
  }),
  actions: {
    changeModalVisibility(show){
      this.show = show
    }
  }
})