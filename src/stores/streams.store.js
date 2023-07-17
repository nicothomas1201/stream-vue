import { defineStore } from "pinia";
import { getStreams } from "../utils/get-streams.js"

export default defineStore({
  state: () => ({
    streams: []
  }),
  actions: {
    async fetchStreams(){
      this.streams = await getStreams()

    }
  }
})