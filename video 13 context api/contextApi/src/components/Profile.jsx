import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext);
  
  if ( !user) return <>Please Login</>
  return <>WElcome : {user.userName}</>
}

export default Profile