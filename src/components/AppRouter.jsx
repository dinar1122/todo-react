import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate  } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './router/index'
import { AuthContext } from '../context';

export default function AppRouter() {
  const {isAuth, setAuth} = useContext(AuthContext)
  
  return (
    isAuth ? 
    <Routes>
      {privateRoutes.map(route => {
        return <Route key={route.path} Component={route.component} path={route.path} exact={route.exact}></Route>
      })}
    </Routes> :
    <Routes>
    {publicRoutes.map(route => {
      return <Route key={route.path} Component={route.component} path={route.path} exact={route.exact}></Route>
    })}

  </Routes>
  )
}
