import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import CardIcon from "../../components/CardIcon";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import api from "../../api/gatewayApi";
import { CardIconInvitation } from "../../components/CardIconInvitation";

export const EventsPhotographer = () => {
  const navigate = useNavigate();
  const { idPhotographer } = useParams();
  const [listData, setListData] = useState([]);
  const [filter, setFilter] = useState("accepted"); // Opciones: "accepted", "pending"

      const handleAccept = (idEvent) => {
        try {
            api.post(`photographer/${idPhotographer}/accept-invitation/${idEvent}`);
        } catch(error) {
            console.log(error);
        }
      console.log(`Aceptar invitación para el evento ${event.id}`);
    };
  
    const handleReject = () => {
      console.log(`Rechazar invitación para el evento ${event.id}`);
    };
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let endpoint = `/photographer/${idPhotographer}/events`;

        if (filter === "pending") {
          endpoint = `event/invitation/photographer/${idPhotographer}`;
        }

        const response = await api.get(endpoint);

        if (response.status === 200) {
          setListData(response.data);
        } else {
          console.error('Error al obtener eventos:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };

    fetchEvents();
  }, [idPhotographer, filter]);

//   const handleClickCreate = () => {
//     navigate(`/organizer/${idOrg}/event/create`);
//   };

  const handleCardClick = (id) => {
    navigate(`/organizer/event/${id}`);
  };

  return (
    <div className="w-full p-5 container">
      <div className="mt-3 w-full">
        <div className='flex justify-between px-5 py-5 items-center'>
          <h2 className="text-2xl font-bold font-sans text-dark">
            {filter === "pending" ? "Tus invitaciones" : "Tus eventos"}
          </h2>
          <div>
            <label className="mr-2">Mostrar:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="accepted">Aceptados</option>
              <option value="pending">Pendientes</option>
            </select>
          </div>
        </div>
        <div className='mx-16 grid grid-cols-4 gap-4'>
          {listData.map((event, index) => (
            <div key={index}>
                <CardIconInvitation
                //   key={event.eventId}
                  icon={<UserGroupIcon className='text-dark w-24 h-24 my-4' />}
                  title={event.eventName ?? event.event.name}
                  description={`Fecha: ${event.date}`}
                  paragraph={`Hora: ${event.time ?? event.event.time}`}
                  onClick={() => handleCardClick(event.eventId)}
                  isPending={filter === "pending"} 
                  handleAccept={() => handleAccept(event.eventId)}
                  handleReject={handleReject}// Indicar si el evento está pendiente
                />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};