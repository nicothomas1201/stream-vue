import axios from "axios";

export async function getApiAuthorization(url){
  let result = await axios.post(url)
  return result.data.access_token
  
}