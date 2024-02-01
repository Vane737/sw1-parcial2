// import PropTypes from 'prop-types'

export const Guests = () => {

    const guests = [
        { id: 1, name: 'Juan Pérez', email: 'juan@example.com', state: "Confirmo", companions: 2},
        { id: 2, name: 'María López', email: 'maria@example.com', state: "Asistio", companions: 4},
        { id: 3, name: 'María López', email: 'maria@example.com', state: "Asistio", companions: 3 },
        { id: 4, name: 'María López', email: 'maria@example.com', state: "Falto", companions: 1  },
        // Agrega más invitados según tus datos
      ];

      const getStateClass = (state) => {
        switch (state) {
          case 'Confirmo':
            return 'bg-confirmo';
          case 'Asistio':
            return 'bg-aceptado';
          case 'Falto':
            return 'bg-cancelado';
          default:
            return '';
        }
      };

  return (
    <div className="w-full p-5 container mx-auto ">
        <div className="mt-3 w-full">
            <div className="px-5 py-5 ">
                <h2 className="text-2xl font-bold mb-4">Listado de Invitados</h2>
            </div>
            <table className="w-10/12 mx-16 border text-center rounded-xl border-slate-900">
                <thead className="font-[Georgia]">
                <tr className="bg-table">
                    <th className="py-2 px-4 border">Id</th>
                    <th className="py-2 px-4 border">Nombre</th>
                    <th className="py-2 px-4 border">Correo</th>
                    <th className="py-2 px-4 border">Acompañantes</th>
                    <th className="py-2 px-4 border">Estado</th>
                    {/* Agrega más encabezados según la información que tengas */}
                </tr>
                </thead>
                <tbody>
                {guests.map((invitado, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border">{invitado.id}</td>
                    <td className="py-2 px-4 border">{invitado.name}</td>
                    <td className="py-2 px-4 border">{invitado.email}</td>
                    <td className="py-2 px-4 border">{invitado.companions}</td>
                    <td className={`py-2 px-4 border text-sm font-semibold `}>
                        <span className={`px-3 py-1 rounded-lg text-white ${getStateClass(invitado.state)}`}>{invitado.state}</span>
                    </td>
                    {/* <td className="py-2 px-4 border text-xs font-semibold" ><span className="bg-cancelado text-white px-3 py-1 rounded-lg">{invitado.state}</span></td> */}
                    {/* Agrega más celdas según la información que tengas */}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
  );
};

// export default Guests;

// Guests.propTypes = {
//     guests: PropTypes.array.isRequired
// }