import { useState } from "react"
import { browserRouter, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"
import SingleProduct from "./pages/SingleProduct"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ProtectedRout from "./pages/ProtectedRout"
import SharedProductLayout from "./pages/SharedProductLayout"
function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>

          <Route
            path="login"
            element={<Login setUser={setUser}></Login>}
          ></Route>

          <Route
            path="dashboard"
            element={
              <ProtectedRout user={user}>
                <Dashboard user={user} />
              </ProtectedRout>
            }
          ></Route>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
