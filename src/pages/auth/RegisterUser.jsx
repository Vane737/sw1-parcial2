// RegisterUser.js
import { useEffect, useState } from 'react';
import { FormDynamicCreate } from '../../components/Form';
import { MyModalMessage } from '../../components/utils/MyModalMessage';
import { useNavigate } from 'react-router-dom';
import { CameraIcon } from '@heroicons/react/24/solid';
import api from '../../api/gatewayApi';
// import axios from '../../api/gatewayApi'; // Asumiendo que tienes un archivo axios para manejar tus solicitudes HTTP

export const RegisterUser = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [roles, setRoles] = useState([]); // Estado para almacenar los roles
  
  const button = 'Registrarse';

  const initialValues = {
    name: '',
    cellphone: '',
    email: '',
    password: '',
    rolId: null,
  };

  const fields = [
    { name: 'name', label: 'Nombre', type: 'text' },
    { name: 'cellphone', label: 'Teléfono', type: 'text' },
    { name: 'email', label: 'Correo Electrónico', type: 'text' },
    { name: 'password', label: 'Contraseña', type: 'text' },
    { name: 'rolId', label: 'Rol ID', type: 'text' },

  ];


  useEffect(() => {
    // Aquí realizarías la solicitud HTTP para obtener la lista de roles
    const fetchRoles = async () => {
      try {
        const response = await api.get('/rol'); // Ajusta la ruta según tu API
        if (response.status == 200) {
          setRoles(response.data);
          console.log(response.data);
        } else {
          console.error('Error al obtener roles:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener roles:', error);
      }
    };

    fetchRoles();
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  const handleSubmit = async (formData) => {
    try {
      
      // Verificar si se ha seleccionado un rol
      if (formData.rolId === null) {
        throw new Error('Por favor, selecciona un rol.');
      }

      let apiEndpoint = ''; // Inicializa la URL del endpoint

      switch (formData.rolId) {
        case 2:
          apiEndpoint = '/auth/photographer/signup'; // URL para el rol de Organizador
          console.log(apiEndpoint);
          api.post(apiEndpoint, formData)
          .then((response) => {
            console.log(formData);
            // Verificar si la solicitud fue exitosa
            console.log(response.status);
            setMessage('Fotógrafo registrado exitosamente');
            setIsOpen(true);
            navigate(`/`); // Redirigir al usuario a la página de inicio de sesión
            })
          break;
        case 3:
            apiEndpoint = '/auth/organizer/signup'; // URL para el rol de Fotógrafo
            console.log(apiEndpoint);
            api.post(apiEndpoint, {...formData, address: formData.address })
            .then((response) => {
              console.log(formData);
              // Verificar si la solicitud fue exitosa
              console.log(response.status);
              setMessage('Organizador registrado exitosamente');
              setIsOpen(true);
              navigate(`/`); // Redirigir al usuario a la página de inicio de sesión
              })

          break;
        // Puedes agregar más casos según sea necesario

        default:
          throw new Error('Rol no reconocido');
      }

      console.log(formData);
      // Realizar la solicitud HTTP para registrar al usuario
    } catch(error) {
      setMessage('Error al registrar usuario: ' + error.message);
      setIsOpen(true);
    }
  };

  const closeModal = ({ open, accept }) => {
    setIsOpen(open);
    setIsAccept(accept);
  };

  return (
    <section className="container mx-auto p-8 items-center max-w-lg border justify-center  mt-5 border-gray-300 rounded-md">
      <div className='flex text-center text-dark justify-center items-center mb-8'>
          <CameraIcon className="h-9 w-9 pr-2 text-center "/>
          <h2 className="text-2xl font-bold">
            Regístrate
          </h2>
        </div>
      <div className="flex flex-col">
        <FormDynamicCreate
          fields={fields}
          initialValues={initialValues}
          button={button}
          getValues={handleSubmit}
          roles={roles} // Pasamos la lista de roles al formulario
        />
      </div>
    {isOpen && <MyModalMessage Text={message} estados={closeModal} />}
  </section>
  );
};