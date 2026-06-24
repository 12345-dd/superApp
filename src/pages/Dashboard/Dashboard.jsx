import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const user = useSelector((state) => state.user)
  const categories = useSelector((state) => state.category.selectedCategories)

  return (
    <div style={{color:"white", padding:"40px"}}>
      <h1>Dashboard</h1>
      <hr />
      
      <h2>User</h2>
      <pre>
        {JSON.stringify(user,null,2)}
      </pre>

      <hr />

      <h2>Categories</h2>

      <pre>
        {JSON.stringify(categories,null,2)}
      </pre>
    </div>
  )
}

export default Dashboard