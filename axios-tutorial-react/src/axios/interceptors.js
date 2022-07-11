import axios from "axios"

const authfetch = axios.create({
  baseURL: "https://course-api.com",
})

authfetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json"
    console.log("request sent")
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)
authfetch.interceptors.response.use(
  (response) => {
    console.log("got response")
    return response
  },
  (error) => {
    if (error.response.status === 404) {
      console.log("not found")
    }
    return Promise.reject(error)
  }
)

export default authfetch
