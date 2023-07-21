import { createTwitchRequest } from "../request/twitch";

const browserLanguage = navigator.language || navigator.userLanguage
const languageCode = browserLanguage.substring(0, 2)

const twitchRequest = await createTwitchRequest()

export async function getStreams(){
  const data = await twitchRequest.get('/streams', {
    params: {
      language: languageCode
    }
  })
  return data.data
}

export async function getStreamsByUsername(channelName){
  const data = await twitchRequest.get('/streams', {
    params: {
      user_login: channelName
    }
  })

  return data.data
}