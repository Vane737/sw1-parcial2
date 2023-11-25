// import React from "react";

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import CreateUser from './pages/auth/CreateUser';
import Events from './pages/eventos/Events';

const App = () => {
  return (
    <div className=''>
      <BrowserRouter> {/* Proveedor de la libreria */}
        <div className='flex'>
          <SideBar />
          <div className='w-full'>
          <NavBar />

        <Routes>       {/* El que contendra las rutas */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={ <Home /> } />

          <Route path='/usuarios'>
            <Route index element={<Home /> } />
            <Route path='create' element={<CreateUser /> } />
            <Route path='edit' element={<Home /> } />
            <Route path=':id' element={<Home /> } />
          </Route>
          <Route path='/eventos'>
            <Route index element={<Events /> } />
            <Route path='create' element={<Home /> } />
            <Route path='edit' element={<Home /> } />
            <Route path=':id' element={<Home /> } />
          </Route>

        </Routes>
          </div>
        </div>
        <div className='flex'>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;