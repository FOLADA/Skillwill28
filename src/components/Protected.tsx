import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protected:React.FC = () => {
    const auth = {token:false}
  return auth.token ? <Outlet/> : <Navigate to={"/"}/>
}

export default Protected
