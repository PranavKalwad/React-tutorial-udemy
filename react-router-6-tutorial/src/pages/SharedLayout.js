import { Link, Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import StyledNavbar from "../Components/StyledNavbar"
const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  )
}
export default Home
