// import React from "react";

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import { RegisterUser} from './pages/auth/index';
import { Events, CreateEvent, SendInvitation, ReadEvent } from './pages/eventos/index';
import { Photography } from './pages/photography/Photography';
import { Home } from './pages/home';
// import ReadEvent from './pages/eventos/ReadEvent';

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
            <Route path='create' element={<RegisterUser /> } />
            <Route path='edit' element={<Home /> } />
            <Route path=':id' element={<Home /> } />
          </Route>
          <Route path='/eventos'>
            <Route index element={<Events /> } />
            <Route path='send/invitation' element={<SendInvitation /> } />
            <Route path='create' element={<CreateEvent /> } />
            <Route path='edit' element={<Home /> } />
            <Route path='view/:id' element={<ReadEvent /> } />
          </Route>
          <Route path='/fotografias'>
            <Route index element={<Home /> } />
            <Route path='send/invitation' element={<SendInvitation /> } />
            <Route path='create' element={<CreateEvent /> } />
            <Route path='edit' element={<Home /> } />
            <Route path='view/:id' element={<Photography /> } />
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