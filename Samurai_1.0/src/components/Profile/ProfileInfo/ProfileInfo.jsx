import React from 'react'
import cssProfileInfo from './ProfileInfo.module.css'
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5peH88WVg6YB75RUJo37XBWePy6xrGts5WW2QAoyRAXOh_BQ1diw7qDQ4eNsNoRck9s&usqp=CAU"
          alt='Big_photo'/>
      </div>
      
      <div className={cssProfileInfo.descriptionBlock}> ava + description
      </div>
    </div>
  )
}
export default ProfileInfo