import React from 'react'
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { Navigate, Outlet } from 'react-router-dom';


function PrivateRote() {
    const {isLogin}=useShoppingCartContext()
  return (
    <>
    {isLogin ? <Outlet/>:<Navigate to="/login" />}
    </>
  )
}

export default PrivateRote