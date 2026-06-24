import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const DashboardRoute = ({children}) => {
    const categories = useSelector(state => state.category.selectedCategories)

  return categories.length >= 3 ? children : <Navigate to="/categories" replace />
}

export default DashboardRoute