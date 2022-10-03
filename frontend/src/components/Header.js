import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'

const Header = () => {
  
  const {user,logoutUser} = useContext(AuthContext)

  
  return user?
  (<div className='app-header'>
    <p>Hello, {user?.username} !!!</p>
    
    <p id='logout' onClick={logoutUser} >Logout</p>
  </div>)
  :null
}

export default Header