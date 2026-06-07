// importing request fixture for API
import {request} from "@playwright/test"


import * as dotenv from "dotenv"
dotenv.config()



async function fetchId(){

 
  const api =  await request.newContext({
   baseURL : "https://gmail.googleapis.com",
   extraHTTPHeaders : {
    "Authorization" : `Bearer ${process.env.token}`
   }

  });

  
  const response = await api.get("/gmail/v1/users/me/messages");

  let data = await response.json();

  console.log(data);

  let emailId = data.messages[0].id;

  return emailId;



}


export async function fetchEmail(){

  const emailId = await fetchId();

  const api = await request.newContext({
    baseURL : "https://gmail.googleapis.com",
   extraHTTPHeaders : {
    "Authorization" : `Bearer ${process.env.token}`
   }

  });

  const response = await api.get("/gmail/v1/users/me/messages/"+emailId);

  const resJson = await response.json();

  const latestEmail = resJson.snippet

  return latestEmail;


}






