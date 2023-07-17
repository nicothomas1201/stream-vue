import axios from "axios";
import { BASE_URL, CLIENT_ID, API_AUTH_URL } from "../config";
import { getApiAuthorization } from "../utils/api-authorizathion";


export async function createTwitchRequest(){
  const token = await getApiAuthorization(API_AUTH_URL)


  const  config = {
    baseURL: BASE_URL,
    headers: {
      'Client-Id': CLIENT_ID,
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.create(config)
}




