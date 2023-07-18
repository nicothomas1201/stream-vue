import { defineStore } from "pinia";
import { getStreams, getUserData, getChannels  } from "../api-services"
import { formatViewersCount } from "../utils"

export default defineStore('streams', {
  state: () => ({
    streams: [],
    users: [],
    channels: [],
  }),

  getters: {
    getUserByLogin: (state) => (userLogin) => {
      return state.users.find( user => user.login === userLogin)
    },

    getUserIds: (state) => (cuantity = 5) => {
      return state.users.filter((user, index) => (index + 1) <= cuantity)
        .map( user => user.id)
    },

    getGameIdListByChannels: (state) => () => {
      return state.channels.map(channel => channel.game_id)
    }
  },
  actions: {
    async setUpStreamsStates(){
      // get streams
      await this.fetchStreams()

      // get profile by streams
      await this.fetchUsers()

      // obtener los primeros 5 canales de los primeros 5 usuarios
      await this.fetchChannels()

      // Agregar profile y stream_viewers al channel
      this.addProfileToChannels()
    },
    async fetchStreams(){
      this.streams = await getStreams()      
    },
    async fetchUsers(){
      const currentUserLoginList = this.streams.data.map( stream => stream.user_login)
      this.users = await Promise.all(
        currentUserLoginList.map( async user => {
          return await getUserData(user)
        })
      )
    },

    async fetchChannels(){
      let userIdList = this.getUserIds()
      this.channels = await getChannels(userIdList)
    },

    addProfileToChannels(){
      this.channels.forEach((channel, index) => {
        // tengo que arreglar esto porque puede que no vengan en el mismo orden
        // por efectos practicos lo hago de esta manera
        channel.profile = this.users[index]
        channel.viewers = formatViewersCount(this.streams.data[index].viewer_count)
      })
    }
  }
})