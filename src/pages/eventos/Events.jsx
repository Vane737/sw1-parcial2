import { PlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';
import CardIcon from '../../components/CardIcon';


export const Events = () => {
  const navigate = useNavigate();

  const listData = [
    {
      id:"1",
      name: "Bautizo de María Pérez",
      description: "Celebración del bautizo de María Pérez",
      date: "2023-12-15",
      time: "8:30:00 am",
      address: "Iglesia Santa María, Ciudad de la Esperanza",
      organizerId: 1,
      people: [
        {
          email: "dianaerika.montano16@gmail.com",
          cant: 3,
        },
        {
          email: "daylymontano2006@gmail.com",
          cant: 2,
        },
      ],
    },
    {
      id:"2",
      name: "Cumpleaños de Juan",
      description: "Fiesta de cumpleaños de Juan",
      date: "2023-11-20",
      time: "6:00:00 pm",
      address: "Casa de Juan, Calle Principal",
      organizerId: 2,
      people: [
        {
          email: "juan.amigo1@gmail.com",
          cant: 5,
        },
        {
          email: "amigo2@gmail.com",
          cant: 3,
        },
      ],
    },
    {
      id:"3",
      name: "Reunión de trabajo",
      description: "Reunión mensual del equipo",
      date: "2023-10-05",
      time: "10:00:00 am",
      address: "Oficina principal, Torre Empresarial",
      organizerId: 3,
      people: [
        {
          email: "gerente@empresa.com",
          cant: 1,
        },
        {
          email: "colega1@empresa.com",
          cant: 2,
        },
      ],
    },
  ];

  const handleClickCreate = ()=>{
    navigate(`/eventos/create`);
  }

  const handleCardClick = ( id ) => {
    navigate(`/eventos/view/${id}`);
  }
  return (
    <div className="w-full p-5 container">
      <div className="mt-3 w-full">
        <div className='flex justify-between px-5 py-5 items-center'>
          <h1 className="text-2xl font-bold font-sans text-dark">Tus eventos</h1>
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
