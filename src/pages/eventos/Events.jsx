import { PlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from 'react-router-dom';
import CardIcon from '../../components/CardIcon';
import { useEffect, useState } from "react";
import api from "../../api/gatewayApi";


export const Events = () => {
  const navigate = useNavigate();
  const idOrg = localStorage.getItem('idOrg') ?? 1 ;
  console.log(idOrg);

  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get(`/organizer/${idOrg}/events`);
        if (response.status === 200) {
          setListData(response.data);
        } else {
          console.error('Error al obtener roles:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener roles:', error);
      }
    };

    fetchRoles();
  }, []);

  
  
  const handleClickCreate = ()=>{
    navigate(`/organizer/${idOrg}/event/create`);
  }

  const handleCardClick = ( id ) => {
    navigate(`/organizer/event/${id}`);
  }
  return (
    <div className="w-full p-5 container">
      <div className="mt-3 w-full">
        <div className='flex justify-between px-5 py-5 items-center'>
          <h2 className="text-2xl font-bold font-sans text-dark">Tus eventos</h2>
        </div>
        <div className='mx-16 grid grid-cols-4 gap-4'>

              <CardIcon icon={<PlusIcon className='text-dark'/>} title="Añadir"  onClick={handleClickCreate} />
              {/* Se devbe iterar la card que esta abajo  */}
              {listData.map((event) => (
              <CardIcon
                key={event.id}
                icon={<UserGroupIcon className='text-dark w-24 h-24 my-4' />}
                title={event.name}
                description={`Fecha: ${event.date}`}
                paragraph={`Hora: ${event.time}`}
                onClick={() => handleCardClick(event.id)}  // Asegúrate de tener esta función
              />
            ))}
    
        </div>            

      </div>
    </div>
  )
}
