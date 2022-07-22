import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequiredAuth = ({children}) => {
const {isAuth} =useSelector(state=>state.AuthReducer)
console.log(isAuth)
if(isAuth)
{  return children }
else{
// return <Navigate to="/"/>
}
}

export default RequiredAuth

