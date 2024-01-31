import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context'

export default function Navbar() {
  const { isAuth, setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  function logout(event) {
    event.preventDefault()
    setAuth(false)
    localStorage.removeItem('auth')
    navigate('/login')
  }
  function loginRedirect(event) {
    event.preventDefault()
    navigate('/login')
  }

  return (
    <nav className="navigation">
      <Link to="/">Posts</Link>
      <Link to="/about">About</Link>
      {isAuth ? (
        <MyButton onClick={logout}>Log out</MyButton>
      ) : (
        <MyButton onClick={loginRedirect} >Log in</MyButton>
      )}
    </nav>
  )
}
