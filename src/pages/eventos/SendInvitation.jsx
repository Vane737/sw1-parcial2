import {  ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link  } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SendInvitation = ({ eventData, onFinalSave }) => {

  const [guestData, setGuestData] = useState({
    email: "",
    cant: 0,
  });

  const [peopleList, setPeopleList] = useState([]);

  const handleGuestChange = (e) => {
    const { name, value } = e.target;
    setGuestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddPerson = () => {
    if (guestData.email && guestData.cant > 0) {
      setPeopleList((prevList) => [
        ...prevList,
        { email: guestData.email, cant: guestData.cant },
      ]);
      setGuestData({ email: "", cant: 0 });
    } else {
      console.error(
        "Por favor, complete los datos del invitado antes de añadir."
      );
    }
  };

  const handleRemovePerson = (index) => {
    const updatedList = [...peopleList];
    updatedList.splice(index, 1);
    setPeopleList(updatedList);
  };

  const handleFinalSave = () => {
    // Validación simple: Verificar si se ingresaron datos del evento
    if (eventData) {
      // Llamar a la función proporcionada por la vista padre para el guardado final
      onFinalSave(peopleList);
    } else {
      // Podrías mostrar un mensaje de error o realizar otras acciones
      console.error(
        "Por favor, complete los datos del evento antes de continuar."
      );
    }
  };


  return (
    <div className="container mx-auto p-10 mt-9 border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold text-center text-dark mb-10 w-full  pb-5">
        Listado de personas a invitar
      </h1>

      <div style={{ display: eventData ? "block" : "none" }}>
        <h2 className="text-xl font-bold m-5">Datos del Invitado</h2>
        <form className="flex justify-between items-center">
           <div className="mb-4 w-2/5  ">
             <label htmlFor="email" className="block mb-2 w-full">
               Correo del Invitado
             </label>
             <input
              type="email"
              name="email"
              value={guestData.email}
              onChange={handleGuestChange}
              className="border border-gray-300 px-3 py-2 w-full rounded-md"
            />
          </div>

          <div className="mb-4 w-2/5">
            <label htmlFor="cant" className="block mb-2">
              Cantidad de acompañantes
            </label>
            <input
              type="number"
              name="cant"
              value={guestData.cant}
              onChange={handleGuestChange}
              className="border border-gray-300 px-3 py-2 w-full rounded-md"
            />
          </div>
          <button
          type="button"
          onClick={handleAddPerson}
          className="bg-primary rounded-md px-10 h-10 mt-3 text-white font-semibold flex justify-evenly items-center"
        >
          Añadir
        </button>
        </form>
      </div>
      <hr className="my-8" />
      <h3 className="font-bold text-dark my-5">Personas que se invitarán</h3>
      <div className="flex px-3 py-1 justify-between items-center border text-dark font-bold rounded-md border-gray-300">
        <span>Correo</span> <span>Acompañantes</span> <span> </span>
      </div>
      {peopleList.map((person, index) => (
        <div
          key={index}
          className="flex px-3 py-1 justify-between items-center border font-sans rounded-md border-gray-300"
        >
           <span>{person.email}</span>  <span>{person.cant}</span>

           <button
            type="button"
            onClick={() => handleRemovePerson(index)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Eliminar
          </button>

        </div>
      ))}
      <div className="flex justify-between mt-10">
        <Link
          type="button"
          className="bg-cancelado rounded-md px-2 text-white font-semibold w-1/3 h-10 flex justify-evenly items-center"
          to="/admin/events"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Cancelar
        </Link>
        <button
          onClick={handleFinalSave}
          className="bg-primary rounded-md p-2 mb-4 text-white font-semibold flex justify-evenly w-1/3 items-center"
        >
          Guardar
        </button>
      </div>
    </div>
  );
  
};
