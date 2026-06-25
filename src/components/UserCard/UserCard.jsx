import React from 'react'
import { useSelector } from 'react-redux'
import userImg from "../../assets/user.png"
import "./UserCard.css"

const UserCard = () => {
  const user = useSelector(state => state.user)
  const categories = useSelector(state => state.category.selectedCategories)

  return (
    <div className='user-card'>
      <div className='user-content'>
        <img src={userImg} alt="profile" />

        <div className='user-info'>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <h2>{user.username}</h2>

          <div className='category-list'>
            {categories.map((category) => (
              <span
                key={category}
                className='category-chip'
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard