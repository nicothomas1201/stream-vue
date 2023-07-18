import { createTwitchRequest } from "../request/twitch";

export async function getChannels(userIds){
  const twitchRequest = await createTwitchRequest()
  const channels = await twitchRequest.get('/channels', {
    params: {
      broadcaster_id: userIds 
    }
  })
  return channels.data.data
}