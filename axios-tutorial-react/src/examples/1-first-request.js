import { useEffect } from "react"
// limit, if 429 wait for 15 min and try again
import axios from "axios"
const url = "https://course-api.com/react-store-products"

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url)
      const data = response.data
      console.log(data)
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    console.log("first axios request")
  }, [])

  return <h2 className="text-center">first request</h2>
}
export default FirstRequest
