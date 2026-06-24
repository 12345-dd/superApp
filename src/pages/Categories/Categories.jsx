import React from 'react'
import { useSelector } from 'react-redux'

const Categories = () => {
  const user = useSelector((state) => state.user)

  return (
    <div>
      <h1>Categories</h1>
      <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  )
}

export default Categories