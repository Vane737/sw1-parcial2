// eslint-disable-next-line react/prop-types
const CardIcon = ({ icon, title, description, paragraph, onClick }) => {
    return (
 
    <div 
        className="w-52 rounded-xl shadow-xl hover:bg-gray-100  text-dark text-center items-center p-2" 
        onClick={onClick}
    >
        <div className="flex justify-center items-center">
            {icon}  

        </div>
        <div className="items-end">
            <div className="font-bold font-sans text-dark text-center my-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
            <p className="text-gray-700 text-base">{paragraph}</p>
        </div>
    </div>

    );
  };
  
  export default CardIcon;

