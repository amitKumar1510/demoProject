import React from "react";
import axios from 'axios';

export default function Test(){

async function getTime() {
  const response = await axios.get('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
  const timestamp = response.data.unixtime * 1000/360000; // convert to milliseconds
  return timestamp;
}
  return <>
    {console.log(getTime())}
  </>
}




