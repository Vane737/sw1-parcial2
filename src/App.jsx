// import React from "react";

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import { RegisterUser} from './pages/auth/index';
import { Events, CreateEvent, SendInvitation, ReadEvent } from './pages/eventos/index';
import { Photography } from './pages/photography/Photography';
import { HomePage } from './pages/HomePage';
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
          <Route path='/' element={<HomePage />} />
          <Route path='/HomePage' element={ <HomePage /> } />

          <Route path='/usuarios'>
            <Route index element={<HomePage /> } />
            <Route path='create' element={<RegisterUser /> } />
            <Route path='edit' element={<HomePage /> } />
            <Route path=':id' element={<HomePage /> } />
          </Route>
          <Route path='/eventos'>
            <Route index element={<Events /> } />
            <Route path='send/invitation' element={<SendInvitation /> } />
            <Route path='create' element={<CreateEvent /> } />
            <Route path='edit' element={<HomePage /> } />
            <Route path='view/:id' element={<ReadEvent /> } />
          </Route>
          <Route path='/fotografias'>
            <Route index element={<HomePage /> } />
            <Route path='send/invitation' element={<SendInvitation /> } />
            <Route path='create' element={<CreateEvent /> } />
            <Route path='edit' element={<HomePage /> } />
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