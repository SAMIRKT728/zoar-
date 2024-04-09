import { useState } from 'react'
import {Routes, Route,Navigate} from "react-router-dom"

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './layouts/authentication/sign-in/main'
import Home from './layouts/home/main'
import routes from './routes'
import Sidenav from './components/sideNav/side'


function App() {

  const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return <Route  path={route.route} element={route.component} key={route.key} />;
    }

    return null;
  });

  return (
    <>
     <Sidenav
              
              brandName="ZOAR"
              brand={'./logo.ico'}
              routes={routes}
           
            />
         <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    
    </>
  )
}

export default App
 /* <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/login' element={<LoginForm/> }/>
      </Routes>*/