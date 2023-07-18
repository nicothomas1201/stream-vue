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
    async fetchStreams(){
      // get streams
      this.streams = await getStreams()

      // get profile by streams
      const currentUserLoginList = this.streams.data.map( stream => stream.user_login)
      this.users = await Promise.all(
        currentUserLoginList.map( async user => {
          return await getUserData(user)
        })
      )

      // obtener los primeros 5 canales de los primeros 5 usuarios
      let userIdList = this.getUserIds()
      this.channels = await getChannels(userIdList)

      // Agregar profile y stream_viewers al channel
      this.channels.forEach((channel, index) => {
        // tengo que arreglar esto porque puede que no vengan en el mismo orden
        // por efectos practicos lo hago de esta manera
        channel.profile = this.users[index]
        channel.viewers = formatViewersCount(this.streams.data[index].viewer_count)
      })



      //obtener la informacion del game asi como el name (jus chatting etc)

      // AL FINAL ES INNECESARIO PERO IGUAL DEJARE LA FUNCION EN API-SERVICES

      // let gameidsList = this.getGameIdListByChannels()
      // let games = await Promise.all(
      //   gameidsList.map( async gameId => await getGameInfo(gameId))
      // )
      // this.channels.forEach( (channel, index) => {
      //   channel.game_data = games[index]
      // }) 

      // console.log(this.channels)
    }
  }
})