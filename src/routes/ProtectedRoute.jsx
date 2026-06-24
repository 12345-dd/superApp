import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const user = useSelector(state => state.user)

    const hasUser = 
        user.name && 
        user.username && 
        user.email && 
        user.mobile 

  return hasUser ? children : <Navigate to="/" replace />
}

export default ProtectedRoute