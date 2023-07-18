import { createTwitchRequest } from "../request/twitch";

export async function getGameInfo(gameId){
  const twitchRequest = await createTwitchRequest()
  const channels = await twitchRequest.get(`/games`, {
    params: {
      id: gameId
    }
  })
  return channels.data.data[0]
}