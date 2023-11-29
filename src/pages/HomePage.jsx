import { useNavigate } from "react-router-dom";

import { PlusIcon } from "@heroicons/react/24/solid";

import CardIcon from "../components/CardIcon";
import Card from "../components/Card";
import defaultImage from '../assets/default.jpg';

export const HomePage = () => {
  const navigate = useNavigate();
  const listData = [
    {
      id:"1",
      image: defaultImage,
      price: 15,
      photographerId: 2,
    },
    {
      id:"2",
      image: defaultImage,
      price: 15,
      photographerId: 2,
    },
    {
      id:"3",
      image: defaultImage,
      price: 15,
      photographerId: 2,
    },
    {
      id:"4",
      image: defaultImage,
      price: 15,
      photographerId: 2,
    },
    {
      id:"5",
      image: defaultImage,
      price: 15,
      photographerId: 2,
    },

  ];

  const handleClickCreate = ()=>{
    navigate(`/eventos/create`);
  }

  const handleCardClick = ( id ) => {
    navigate(`/fotografias/view/${id}`);
  }
    return (
      <div className="w-full p-5 container">
      <div className="mt-3 w-full">
        <div className='flex justify-between px-5 pb-10 items-center'>
          <h1 className="text-2xl font-bold font-sans text-dark">Mira lo mas reciente</h1>
        </div>
        <div className='mx-16 grid grid-cols-4 gap-4'>

              <CardIcon icon={<PlusIcon className='text-dark'/>} title="Añadir"  onClick={handleClickCreate} />
              {/* Se devbe iterar la card que esta abajo  */}
              {listData.map((photography) => (
              <Card key={photography.id} imageSrc={photography.image} title="Alonso Edgar Variloche" description="Autor" price={`${photography.price} Bs`} onClick={handleCardClick} />
            ))}
    
        </div>            

      </div>
    </div>
    );
  }
  