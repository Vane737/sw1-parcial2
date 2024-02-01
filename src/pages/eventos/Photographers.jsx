
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api/gatewayApi";

export const Photographers = () => {
  const { idEvent } = useParams();
  const [photographers, setPhotographer] = useState([]);

  useEffect(() => {
    const fetchPhotographers = async () => {
      try {
        const response = await api.get(`/event/${idEvent}/photographers`);
        if (response.status === 200) {
          setPhotographer(response.data);
        } else {
          console.error('Error al obtener fotógrafos:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener fotógrafos:', error);
      }
    };

    fetchPhotographers();
  }, []);

  return (
    <div className="w-full p-5 container mx-auto ">
      <div className="mt-3 w-full">
        <div className="px-5 py-5 ">
          <h2 className="text-2xl font-bold mb-4">Listado de Fotógrafos</h2>
        </div>

        {photographers.length === 0 ? (
          <h2 className="font-[Georgia] ml-10">No hay fotógrafos invitados en este evento.</h2>
        ) : (
          <table className="w-10/12 mx-16 border text-center rounded-xl border-slate-900">
            <thead className="font-[Georgia]">
              <tr className="bg-table">
                <th className="py-2 px-4 border">Id</th>
                <th className="py-2 px-4 border">Nombre</th>
                <th className="py-2 px-4 border">Correo</th>
                <th className="py-2 px-4 border">Opcion</th>
                {/* Agrega más encabezados según la información que tengas */}
              </tr>
            </thead>
            <tbody>
              {photographers.map((photographer, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-2 px-4 border">{photographer.id}</td>
                  <td className="py-2 px-4 border">{photographer.name}</td>
                  <td className="py-2 px-4 border">{photographer.email}</td>
                  <td className="py-2 px-4 border underline hover:text-slate-700">
                    <Link to={`photographer/${photographer.id}`}>Ver perfil</Link>
                  </td>
                  {/* Agrega más celdas según la información que tengas */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};