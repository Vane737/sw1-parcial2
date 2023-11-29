import eventsDefault from "../../assets/event.jpg";

export const ReadEvent = () => {
  const event = {
    id: "3",
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
  };

  const handleViewGuests = () => {
    // Lógica para redirigir o manejar la vista de invitados
    console.log("Mostrar invitados");
  };

  const handleViewPhotographers = () => {
    // Lógica para redirigir o manejar la vista de fotógrafos
    console.log("Mostrar fotógrafos");
  };

  return (
    <div className="w-full py-5 container">
      <div className=" w-full flex justify-center items-center mt-10">
        <div className="mx-8 text-center">
          <h1 className="mb-4">
            <strong className="text-2xl font-[Georgia]">{event.name}</strong>
          </h1>
          <div className="mb-2">{event.description}</div>
          <div className="mb-2">Lugar: {event.address}</div>
          <div className="mb-2">Fecha: {event.date}</div>
          <div className="mb-2">Hora: {event.time}</div>
            <div className="flex text-center mt-5">
            <button
                onClick={handleViewGuests}
                className="mx-4 hover:bg-secondary_light hover:text-dark hover:border-none rounded-md p-2 text-secondary font-bold border border-secondary flex justify-evenly  items-center"
            >
                Ver Invitados
            </button>
            <button
                onClick={handleViewPhotographers}
                className="hover:bg-primary_light hover:text-dark hover:border-none rounded-md p-2 text-primary font-bold border border-primary flex justify-evenly  items-center"
            >
                Ver Fotógrafos
            </button>
            </div>
        </div>
          <img src={eventsDefault} alt="" className="w-1/2 mx-2 " />
        {/* <div className="">
        </div> */}
      </div>
    </div>
  );
};
