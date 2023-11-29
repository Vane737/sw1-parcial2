import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SendInvitation } from "./SendInvitation";

export const CreateEvent = () => {
  const navigate = useNavigate();
  const [saveEvent, setSaveEvent] = useState(false);
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    address: "",
    organizerId: 1,
  });

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    if (eventData.name) {
      setSaveEvent(true);
    } else {
      console.error(
        "Por favor, complete los datos del evento antes de continuar."
      );
    }
  };

  const handleFinalSave = (peopleList) => {
    // Completar la construcción del objeto evento
    const completeEventData = {
      ...eventData,
      // Otras propiedades del evento si es necesario
      people: peopleList,
    };

    // Aquí puedes realizar el guardado final del evento con la lista de personas
    console.log("Guardando el evento completo:", completeEventData);
    // Puedes realizar una solicitud POST a tu servidor aquí para guardar los datos

    // Navegar a la siguiente página o realizar otras acciones después de guardar
    navigate("/confirm-event", { state: completeEventData });
  };


  return (
    <div className="container mx-auto w-4/5 border p-10 mt-9 border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold text-center text-dark mb-10 w-full pb-5">
        Registrar Evento
      </h1>

      <form>
        <div className="my-5 flex justify-between">
          <div className="w-2/4 mr-4">
            <label htmlFor="name" className="block mb-2">
              Nombre del Evento
            </label>
            <input
              type="text"
              name="name"
              value={eventData.name}
              onChange={handleEventChange}
              className="border border-gray-300 rounded-md px-3 py-2 min-w-full"
            />
          </div>
          <div className="w-2/4">
            <label htmlFor="date" className="block mb-2">
              Fecha del evento
            </label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleEventChange}
              // onChange={(e) => setBirthdate(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-full rounded-md"
            />
          </div>
        </div>
        <div className="mb-4 flex justify-between">
          <div className="w-2/4 mr-4">
            <label htmlFor="time" className="block mb-2">
              Hora de inicio
            </label>
            <input
              type="text"
              name="time"
              value={eventData.time}
              onChange={handleEventChange}
              className="border border-gray-300 px-3 py-2 min-w-full rounded-md"
            />
          </div>
          <div className="w-2/4">
            <label htmlFor="address" className="block mb-2">
              Dirección
            </label>
            <input
              type="text"
              name="address"
              value={eventData.address}
              onChange={handleEventChange}
              // onChange={(e) => setBirthdate(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-full rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Descripción
          </label>
          <input
            type="text"
            name="description"
            value={eventData.description}
            onChange={handleEventChange}
            className="border border-gray-300 px-3 py-2 w-full rounded-md"
          />
        </div>

        {/* ... (otros campos del evento) */}
      </form>

      {/* Segundo paso: Datos del invitado */}
      <hr />
      <div style={{ display: saveEvent ? "block" : "none" }}>
      {/* Pasar eventData como prop al componente SendInvitation */}
      <SendInvitation eventData={eventData} onFinalSave={handleFinalSave} />
    </div>

      {/* Botones de navegación */}
      <div className="justify-end mt-5" style={{ display: saveEvent ? "none" : "flex" }}>
        <button
          onClick={handleNextClick}
          className="bg-primary rounded-md p-2 mb-4 text-white font-semibold flex justify-evenly w-1/3 items-center"
        >
          Siguiente
          <ArrowRightIcon className="h-5 w-5" />
        </button>
        
      </div>
    </div>
  );
};

