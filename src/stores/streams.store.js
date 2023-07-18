import { defineStore } from "pinia";
import { getStreams, getUserData } from "../utils"

export default defineStore('streams', {
  state: () => ({
    streams: [],
    users: []
  }),

  getters: {
    getUserByLogin: (state) => (userLogin) => {
      return state.users.find( user => user.login === userLogin)
    }
  },
  actions: {
    async fetchStreams(){
      this.streams = await getStreams()
      const currentUserLoginList = this.streams.data.map( stream => stream.user_login)
      this.users = await Promise.all(
        currentUserLoginList.map( async user => {
          return await getUserData(user)
        })
      )
    }
  }
})