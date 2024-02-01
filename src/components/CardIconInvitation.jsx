import { UserGroupIcon } from "@heroicons/react/24/solid";
import PropTypes from 'prop-types';

export const CardIconInvitation = ({  title, description, paragraph, onClick, isPending, handleReject, handleAccept }) => {
    // const handleAccept = () => {
    //   console.log(`Aceptar invitación para el evento ${event.id}`);
    // };
  
    // const handleReject = () => {
    //   console.log(`Rechazar invitación para el evento ${event.id}`);
    // };
  
    return (
      <div  className="w-52 rounded-xl shadow-xl hover:bg-gray-100  text-dark text-center items-center p-2">
         <div className="flex justify-center items-center">
            <UserGroupIcon className='text-dark w-24 h-24 my-4' />
        </div>
        <div className="px-2 py-1">
          <div className="font-bold font-serif text-dark text-sm">{title}</div>
          <p className="text-gray-700 font-serif text-base">{`${description}`}</p>
          <p className="text-gray-700 font-serif text-base">{`${paragraph}`}</p>
  
          {isPending && (
            <div className="flex justify-between mt-4">
              <button
                className="bg-emerald-500 text-white rounded-md px-3 py-1"
                onClick={handleAccept}
              >
                Aceptar
              </button>
              <button
                className="bg-red-500 text-white rounded-md px-3 py-1"
                onClick={handleReject}
              >
                Rechazar
              </button>
            </div>
          )}
  
        </div>
      </div>
    );
  };

  CardIconInvitation.proptypes = {
      event: PropTypes.object.isRequired,
    //   initialValues: PropTypes.object.isRequired,
    //   button: PropTypes.string.isRequired,
    //   getValues: PropTypes.func
    }
    


  
  