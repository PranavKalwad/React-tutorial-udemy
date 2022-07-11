import axios from "axios"

const authfetch = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
})

export default authfetch
