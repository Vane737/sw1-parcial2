import { HomeIcon, SunIcon, CalendarDaysIcon, CameraIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';



  export default function SideBar() {
    return (
      <aside className="bg-white text-dark w-72 min-h-[calc(100vh)] font-bold drop-shadow-lg">
      <div className="mb-8  text-primary shadow-md p-6 px-5">
        <h2 className="text-2xl font-bold flex items-center">
          <span>
          <CameraIcon className='"h-9 w-9 mr-2"'/>
          </span>
          &nbsp;
          PhotoEvent
        </h2>
      </div>
      <nav>
        <ul >
          {/* p-3 flex items-center rounded-md hover:bg-firstop bg-opacity-100 hover:text-primary */}
          <li className="my-1 mx-2">
            <NavLink to="/" 
            className={({ isActive }) => (isActive? "p-3 flex items-center rounded-md bg-primary text-white bg-opacity-100" : "p-3 flex items-center rounded-md hover:bg-primary_light bg-opacity-100")}
            >
            <HomeIcon className="h-5 w-5 mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li className="my-1 mx-2">
            <NavLink to="/usuarios" 
            className={({ isActive }) => (isActive?  "p-3 flex items-center rounded-md bg-primary text-white bg-opacity-100" : "p-3 flex items-center rounded-md hover:bg-primary_light bg-opacity-100")}
            >
              <SunIcon className="h-5 w-5 mr-2"/>
              Gestion de Usuarios
            </NavLink>
          </li>
          <li className="my-1 mx-2">
            <NavLink to="/eventos" 
            className={({ isActive }) => (isActive?  "p-3 flex items-center rounded-md bg-primary text-white bg-opacity-100" : "p-3 flex items-center rounded-md hover:bg-primary_light bg-opacity-100")}
            >
              <CalendarDaysIcon className="h-5 w-5 mr-2"/>
              Gestion de Eventos
            </NavLink>
          </li>
          <li className="my-1 mx-2">
            <NavLink to="/fotografias" 
            className={({ isActive }) => (isActive?  "p-3 flex items-center rounded-md bg-primary text-white bg-opacity-100" : "p-3 flex items-center rounded-md hover:bg-primary_light bg-opacity-100")}
            >
              <CameraIcon className="h-5 w-5 mr-2"/>
              Gestion de Fotografias
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
      );
    }