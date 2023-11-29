import eventsDefault from "../../assets/event.jpg";
import imageDefault from "../../assets/default.jpg";
import {  ShoppingCartIcon } from "@heroicons/react/24/solid";

export const Photography = () => {
  const photo = {
    id: "3",
    photographer: "Alberto Pedraza Garnica",
    price: 15.00,
    idCategory: 1,
    idEvent: 1,
    image_url: imageDefault
  };

  const handleViewGuests = () => {
    console.log("Mostrar invitados");
  };

  const handleViewPhotographers = () => {
    console.log("Mostrar fotógrafos");
  };

  return (
    <div className="w-full py-5 container">
      <div className="w-full flex items-center mt-6">
        <div className="ml-32">
          <p className="font-bold">Fotografía</p>
          <img src={photo.image_url} alt="" className="w-10/12 h-auto my-2" />
        </div>
        <div className="mr-32 text-start w-full h-96 py-5 px-10  shadow-md rounded-lg text-dark">
          <div className="text-2xl font-[Georgia] mb-10">
            <strong >Detalle de fotografia </strong> 
          </div>
          <div className="mb-4 text-xl font-[Georgia]">
            <strong >Fotografo </strong> <a href="_blank" className=" hover:text-slate-900">{photo.photographer}</a> 
          </div>
          <div className="mb-2 text-xl font-[Georgia] my-4"><strong >Precio: </strong> ${photo.price}</div>
          <div className="mb-2 text-xl font-[Georgia] my-4"><strong >Categoria: </strong> {photo.idCategory === 1 ? 'Pública' : 'Privada'}</div>
          {/* Otros detalles de la foto según tu estructura de datos */}
          <div className="flex text-center justify-end items-end mb-4 mt-24">
            <button
              onClick={handleViewGuests}
              className="mx-4 hover:bg-secondary_light hover:text-dark hover:border-none rounded-md px-5 py-2 text-secondary font-bold border border-secondary flex justify-evenly  items-center"
            >
              <ShoppingCartIcon className="h-6 mr-2" />
              Añadir
            </button>
            <button
              onClick={handleViewPhotographers}
              className="hover:bg-primary_light hover:text-dark hover:border-none rounded-md p-2 text-primary font-bold border border-primary flex justify-evenly  items-center"
            >
              Comprar fotografia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
