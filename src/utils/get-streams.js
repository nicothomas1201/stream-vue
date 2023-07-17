import { createTwitchRequest } from "../request/twitch";

export async function getStreams(){
  const twitchRequest = await createTwitchRequest()
  const data = await twitchRequest.get('/streams')
  return data.data
}