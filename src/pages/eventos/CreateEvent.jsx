import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { SendInvitation } from "./SendInvitation";
import api from "../../api/gatewayApi";
import { useNavigate, useParams } from "react-router-dom";

export const CreateEvent = () => {
  const navigate = useNavigate();
  const { idOrg } = useParams();
  const [saveEvent, setSaveEvent] = useState(false);
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    address: "",
    organizerId: parseInt(idOrg, 10),
    photographerEmail: "", // Nuevo campo para el correo del fotógrafo
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

  const handleFinalSave = async (peopleList) => {
    // Filtra los elementos con cant diferente de 0
    const isValid = peopleList.every(
      (person) => !isNaN(person.cant) && person.cant > 0
    );

    if (!isValid) {
      console.error("Por favor, ingrese cantidades válidas para los invitados.");
      return;
    }

    // Convertir las cantidades a números enteros
    const formattedPeopleList = peopleList.map((person) => ({
      email: person.email,
      cant: parseInt(person.cant, 10), // Convertir a entero
    }));

    // Filtra los elementos con cant diferente de 0
    const validPeopleList = formattedPeopleList.filter(
      (person) => person.cant !== 0
    );

    const completeEventData = {
      ...eventData,
      people: validPeopleList,
    };
    try {
      console.log(completeEventData);
      const response = await api.post("/event", completeEventData);
      console.log(response.status);
      if (response.status === 200 || response.status === 201) {
        console.log("Respuesta del servidor:", response.data);
        navigate(`/organizer/${idOrg}/events`);
      } else {
        console.error("Error al registrar el evento");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      // Manejar el error según sea necesario
    }
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

        {/* Nuevo campo para el correo del fotógrafo */}
        <div className="mb-4">
          <label htmlFor="photographerEmail" className="block mb-2">
            Correo del Fotógrafo
          </label>
          <input
            type="email"
            name="photographerEmail"
            value={eventData.photographerEmail}
            onChange={handleEventChange}
            className="border border-gray-300 px-3 py-2 w-full rounded-md"
          />
        </div>
      </form>

      <hr />
      <div style={{ display: saveEvent ? "block" : "none" }}>
        <SendInvitation eventData={eventData} onFinalSave={handleFinalSave} />
      </div>

      <div
        className="justify-end mt-5"
        style={{ display: saveEvent ? "none" : "flex" }}
      >
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