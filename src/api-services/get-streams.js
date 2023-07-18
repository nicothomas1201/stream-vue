import { createTwitchRequest } from "../request/twitch";

const browserLanguage = navigator.language || navigator.userLanguage
const languageCode = browserLanguage.substring(0, 2)

export async function getStreams(){
  const twitchRequest = await createTwitchRequest()
  const data = await twitchRequest.get('/streams', {
    params: {
      language: languageCode
    }
  })
  return data.data
}