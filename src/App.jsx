// import React from "react";

import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { HomeIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import { Login, RegisterUser} from './pages/auth/index';
import { Events, CreateEvent, SendInvitation, ReadEvent, Guests, Photographers } from './pages/eventos/index';
import { Photography } from './pages/photography/Photography';
import { HomePage } from './pages/HomePage';
import {NavLoggin} from './components/NavLoggin';
import { Photographs } from './pages/photography/Photographs';
import Profile from './pages/photographer/Profile';
import { EventsPhotographer } from './pages/photography/EventsPhotographer';
// import Guests from './pages/eventos/Guests';
// import ReadEvent from './pages/eventos/ReadEvent';

const App = () => {
  const idUser = localStorage.getItem('idUser') ?? 1 ;
  const navLinksOrganizer = [
    { to: "/organizer/photographs", icon: <HomeIcon />, text: "Dashboard" },
    { to: `/organizer/${idUser}/events`, icon: <CalendarDaysIcon />, text: "Gestion de Eventos" },
    // { to: "/organizer/guests", icon: <UserGroupIcon />, text: "Mis Invitados" },
    // { to: "/organizer/fotography", icon: <CameraIcon />, text: "Gestion de Fotografias" },
  ];

  const navLinksPhotographer = [
    { to: "/photographer", icon: <HomeIcon />, text: "Dashboard" },
    { to: `/photographer/${idUser}/events`, icon: <CalendarDaysIcon />, text: "Mis Eventos" },
    // { to: "/photographer/guests", icon: <UserGroupIcon />, text: "Mis Invitados" },
    // { to: "/organizer/fotography", icon: <CameraIcon />, text: "Gestion de Fotografias" },
  ];

  return (
    <div className=''>
      {/* {useranouth?  */}
        {/* <BrowserRouter>
            <Routes>       
              <Route path="/" element={<NavLoggin /> }> 
                      <Route index element={ <HomePage />} />
                      <Route path='login' element={<Login />}/>
                      <Route path='register' element={<RegisterUser />}/>
              </Route>
            </Routes>
              
        </BrowserRouter> */}
        {/* : */}

      <BrowserRouter> {/* Proveedor de la libreria */}
        <Routes>       {/* El que contendra las rutas */}
          <Route path="/" element={<NavLoggin /> }> 
                  <Route index element={ <HomePage />} />
                  <Route path='login' element={<Login />}/>
                  <Route path='register' element={<RegisterUser />}/>
          </Route>

          <Route path='/organizer' 
          element={         
          <div className='flex'>
            <SideBar navLinks={navLinksOrganizer} />
            <div className='w-full'> 
            <NavBar />
              <Outlet />
            </div>
          </div> 
        }>
            <Route index element={<HomePage /> } />                           {/* Ver Fotografias */}
            <Route path=':idOrg/events' element={<Events /> } />                     {/* Ver Eventos */}
            <Route path=':idOrg/event/create' element={<CreateEvent /> } />          {/* Crear evento */}
            <Route path='event/edit' element={<HomePage /> } />               {/* Ver editar */}
            <Route path='event/:idEvent' element={<ReadEvent /> } />               {/* Ver evento */}
            <Route path=':idOrg/event/:idEvent/guests' element={<Guests /> } />                   {/* Mostrar invitados */}
            <Route path='guest/send/invitations' element={<SendInvitation /> } />    {/* Invitar invitados  FALTA */}
            <Route path=':idOrg/event/:idEvent/photographers' element={<Photographers /> } />             {/* Ver Fotografo de una fotogragfia FALTA */}
            <Route path=':idOrg/event/:idEvent/photographer/:idPhotograper' element={<Profile /> } />             {/* Ver Fotografo de una fotogragfia FALTA */}
            {/* <Route path='event/:id/photographer/:id' element={<Photographers /> } />             Ver Fotografo de una fotogragfia FALTA */}
            <Route path='photographs' element={<Photographs /> } />       {/* Ver Fotografia */}
            <Route path='photography/:id' element={<Photography /> } />       {/* Ver Fotografia */}
            {/* <Route path='*' element={<NotFound /> } /> */}
          </Route>

          <Route path='/photographer' 
            element={         
            <div className='flex'>
              <SideBar navLinks={navLinksPhotographer} />
              <div className='w-full'> 
              <NavBar />
                <Outlet />
              </div>
            </div> 
          }>    
            <Route index element={<HomePage /> } />
            <Route path=':idPhotographer/events' element={<EventsPhotographer /> } />
            <Route path='photography/profile' element={<HomePage /> } />
            <Route path='photography/upload' element={<HomePage /> } />
            <Route path='photography/:id' element={<HomePage /> } />
            <Route path='sales' element={<HomePage /> } />
          </Route>
        </Routes>
        <div className='flex'>
      </div>
      </BrowserRouter>
      {/* } */}
    </div>
  )
}

export default App;