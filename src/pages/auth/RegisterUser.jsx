// RegisterUser.js
import { useState } from 'react';
import { FormDynamicCreate } from '../../components/Form';
import { MyModalMessage } from '../../components/utils/MyModalMessage';
// import axios from '../../API/axios'; // Asumiendo que tienes un archivo axios para manejar tus solicitudes HTTP

export const RegisterUser = () => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isAccept, setIsAccept] = useState(false);

  const initialValues = {
    name: '',
    cellphone: '',
    email: '',
    password: '',
    address: '',
    company: '',
    rolId: 1, // El valor por defecto para el rol, puede cambiar según tus necesidades
  };

  const fields = [
    { name: 'name', label: 'Nombre', type: 'text' },
    { name: 'cellphone', label: 'Teléfono', type: 'text' },
    { name: 'email', label: 'Correo Electrónico', type: 'email' },
    { name: 'password', label: 'Contraseña', type: 'password' },
    { name: 'address', label: 'Dirección', type: 'text' },
    { name: 'company', label: 'Compañía', type: 'text' },
  ];

  const button = 'Registrarse';

  const handleSubmit = async (formData) => {
    try {
      // Realizar la solicitud HTTP para registrar al usuario
      // const response = await axios.post('/auth/register', formData);

      // Verificar si la solicitud fue exitosa
      // if (response.status === 200) {
      //   setMessage('Usuario registrado exitosamente');
      //   setIsOpen(true);
      // } else {
      //   throw new Error('Error al registrar usuario');
      // }
    } catch (error) {
      setMessage('Error al registrar usuario: ' + error.message);
      setIsOpen(true);
    }
  };

  const closeModal = ({ open, accept }) => {
    setIsOpen(open);
    setIsAccept(accept);
  };

  return (
    <section className="flex items-center justify-center  m-5">
      <div className="bg-white flex flex-col w-1/3 rounded-xl shadow-lg">
        <h2 className="font-bold text-3xl text-center p-4 text-dark">Registrate</h2>
        <div className="flex flex-col pr-5 pl-5">
          <FormDynamicCreate fields={fields} initialValues={initialValues} button={button} getValues={handleSubmit} />
        </div>
      </div>
      {isOpen && <MyModalMessage Text={message} estados={closeModal} />}
    </section>
  );
};