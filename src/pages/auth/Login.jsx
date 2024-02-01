// import {FormDynamicCreate} from '../../components/Form';
import {useNavigate } from 'react-router-dom'
// import axios from '../../API/axios'
import { useEffect, useState } from 'react';
// import api from '../../API/axios';
// import { MyModal } from '../../components/utils';
import { MyModalMessage } from '../../components/utils/MyModalMessage';
import { CameraIcon } from "@heroicons/react/24/solid"; 
import { FormLogin } from '../../components/Form/FormLogin';
import api from '../../api/gatewayApi';
export const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [roles, setRoles] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState('');
  
  const initialValues = {
    email: '',
    password: ''
  };

  const fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password'},
  ];    

  const button = 'Iniciar Sesion';
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get('/rol');
        if (response.status === 200) {
          setRoles(response.data);
        } else {
          console.error('Error al obtener roles:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleUser = () => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("x-token");
        const response = await api.get('/usuario/token', {
          headers: {
            "x-token": token
          }
        });

        const usuario = response.data.usuario;

        switch (usuario.rol.name) {
          case 'Organizador':
            return navigate('/organizer');
          case 'Fotografo':
            return navigate('/phographer');
          default:
            return navigate('/');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  };

  const handleRoleChange = (event) => {
    setSelectedRoleId(event.target.value);
  };

  const handleSubmit = async (formdata) => {
    try {
      let apiEndpoint = '';
      let urlRedirect = '';   
      switch (selectedRoleId) {
        case '2':
          apiEndpoint = '/auth/photographer/signin';
          urlRedirect = '/photographer';
          api.post(apiEndpoint, formdata)
          .then((response) => {
            if (response.data.error) {
              setMessage(response.data.error);
              setIsOpen(true);
            } else {
              const { id, token, email } = response.data;
              localStorage.setItem('idPhoto', id);
              setMessage('Usuario logueado exitosamente');
              setIsOpen(true);
                navigate(`${urlRedirect}`); // Redirigir al usuario a la página de inicio
              }
            })
            break;
            case '3':
              apiEndpoint = '/auth/organizer/signin';
              urlRedirect = '/organizer';
              api.post(apiEndpoint, formdata)
              .then((response) => {
                if (response.data.error) {
                  setMessage(response.data.error);
                  setIsOpen(true);
                } else {
                  const { id, token, email } = response.data;
                  localStorage.setItem('idOrg', id);
                  setMessage('Usuario logueado exitosamente');
                  setIsOpen(true);
                    navigate(`${urlRedirect}`); // Redirigir al usuario a la página de inicio
                  }
                })
          break;
        default:
          console.log('No se encontró ningún id que coincida');
          return;
      }

        // console.log(response.data);



    } catch (error) {
      console.error(error);

      if (error.response && error.response.data && error.response.data.errores) {
        const errorMessage = error.response.data.errores.errors.length < 2 ?
          error.response.data.errores.errors[0].msg :
          "Datos ingresados incorrectos";

        console.log(errorMessage);
        setMessage(errorMessage);
      } else {
        console.log("Error desconocido");
        setMessage("Error desconocido");
      }

      setIsOpen(true);
    }
  };

  const closeModal = ({ open, accept }) => {
    setIsOpen(open);

    if (accept) {
      setIsAccept(true);
    } else {
      setIsAccept(false);
    }
  };

  return (
      <section className="container mx-auto max-w-md border p-10 mt-9 border-gray-300 rounded-md">
        <div className='flex text-center text-dark justify-center items-center mb-16'>
          <CameraIcon className="h-9 w-9 pr-2 text-center "/>
          <h2 className="text-2xl font-bold">
            Iniciar Sesion
          </h2>
        </div>
        <div className='flex justify-around my-4'>
        {roles.map((role) => (
          role.name !== "Invitado" && (
            <div key={role.id} className="flex items-center text-sm">
              <input
                type="radio"
                id={`role-${role.id}`}
                name="role"
                value={role.id.toString()}
                onChange={handleRoleChange}
                className="mr-2"
              />
              <label htmlFor={`role-${role.id}`} className={`px-2 py-1  rounded-md ${
                selectedRoleId === role.id.toString() ? 'bg-secondary text-white' : 'text-primary font-bold border border-primary'
              }`}>
                {`Soy ${role.name}`}
              </label>
            </div>
          )
        ))}
        </div>
            <FormLogin fields={fields}  initialValues={initialValues} button={button} getValues={handleSubmit}/>

        {isOpen && <MyModalMessage Text={message} estados={closeModal} />}
      </section>
  )
}
