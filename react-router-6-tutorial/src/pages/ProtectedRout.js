import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
const ProtectedRout = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />
  }
  return children
}

export default ProtectedRout
