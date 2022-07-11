import { useEffect } from "react"
import authfetch from "../axios/interceptors"
const url = "https://course-api.com/react-store-products"

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = authfetch("/react-store-products")
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">interceptors</h2>
}
export default Interceptors
