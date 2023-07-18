import { createTwitchRequest } from "../request/twitch";


export async function getUserData(userLogin) {
  const twitchRequest = await createTwitchRequest()
  const result = await twitchRequest.get('/users', {
    params: {
      login: userLogin
    }
  })



  return result.data.data[0]
}


