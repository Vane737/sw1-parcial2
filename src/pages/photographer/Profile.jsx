import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/gatewayApi";
import Card from "../../components/Card";

const Profile = () => {
  const { idPhotographer } = useParams();
  const [photographer, setPhotographer] = useState({
    "id": 10,
    "name": "Juan Perez Aguirre",
    "cellphone": "123456789",
    "email": "fotografo.ejemplo@gmail.com",
    "password": "contraseña123",
    "createdAt": "2024-01-31T19:45:15.625Z",
    "updatedAt": "2024-01-31T19:45:15.625Z",
    "photographicSpecialties": "Retratos"
  }
  );
  const [photos, setPhotos] = useState([
    {
      "id": 1,
      "imageUrl": "https://via.placeholder.com/300",
      "title": "Foto 1",
      "description": "Descripción de la foto 1"
    },
    {
      "id": 2,
      "imageUrl": "https://via.placeholder.com/300",
      "title": "Foto 2",
      "description": "Descripción de la foto 2"
    },
    {
      "id": 3,
      "imageUrl": "https://via.placeholder.com/300",
      "title": "Foto 3",
      "description": "Descripción de la foto 3"
    },
    {
      "id": 4,
      "imageUrl": "https://via.placeholder.com/300",
      "title": "Foto 3",
      "description": "Descripción de la foto 3"
    },
    {
      "id": 5,
      "imageUrl": "https://via.placeholder.com/300",
      "title": "Foto 3",
      "description": "Descripción de la foto 3"
    },
    {
      "id": 6,
      "imageUrl": "https://via.placeholder.com/300",
      "title": "Foto 3",
      "description": "Descripción de la foto 3"
    }
  ]);

  useEffect(() => {
    const fetchPhotographer = async () => {
      try {
        const response = await api.get(`/photographer/${idPhotographer}`);
        if (response.status === 200) {
          setPhotographer(response.data);
          // Obtener las fotos del fotógrafo
          const photosResponse = await api.get(`/photographer/${idPhotographer}/photos`);
          if (photosResponse.status === 200) {
            setPhotos(photosResponse.data);
          }
        } else {
          console.error('Error al obtener fotógrafo:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener fotógrafo:', error);
      }
    };

    fetchPhotographer();
  }, [idPhotographer]);

  const handleInviteClick = () => {
    // Lógica para invitar al fotógrafo a un evento
    console.log("Invitar al fotógrafo");
  };

  const handleContactClick = () => {
    // Lógica para redirigir al chat de WhatsApp
    console.log("Redirigir a chat de WhatsApp");
  };

  return (
    <div className="container mx-auto mt-10 p-5 w-11/12">
      {photographer ? (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{photographer.name}</h2>
              <p className="text-gray-600">{photographer.photographicSpecialties}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleInviteClick}
                className="bg-emerald-500 text-white px-4 py-2 rounded-md"
              >
                Invitar
              </button>
              <button
                onClick={handleContactClick}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md"
              >
                Contactame
              </button>
            </div>
          </div>

          {/* Mostrar fotos del fotógrafo */}
          <h3 className="my-8 text-2xl font-bold ">Mis trabajos realizados</h3>
          <hr />
          <div className="mt-8 grid grid-cols-4 gap-4">
            {photos.map((photo) => (
              <Card
                key={photo.id}
                imageSrc={photo.imageUrl}
                title={photo.title}
                description={photo.description}
                onClick={() => {
                  // Lógica para ver detalles de la foto si es necesario
                  console.log("Ver detalles de la foto");
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <p>Cargando perfil del fotógrafo...</p>
      )}
    </div>
  );
};

export default Profile;