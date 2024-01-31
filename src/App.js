import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.css'
import Navbar from './components/UI/Navbar/Navbar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

export default function App() {
  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setAuth(true)
    }
    
  },[])

  return (
    <AuthContext.Provider value={{isAuth, setAuth}}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
