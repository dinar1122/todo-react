import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { isAuth, setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  function login(event) {
    event.preventDefault()
    setAuth(true)
    localStorage.setItem('auth','true')
    navigate('/')
  }

  return (
    <div>
      <div>Login form</div>
      <form action="">
        <MyInput type="text" placeholder="enter login"></MyInput>
        <MyInput type="text" placeholder="enter password"></MyInput>
        <MyButton onClick={login}>login</MyButton>
      </form>
    </div>
  )
}
