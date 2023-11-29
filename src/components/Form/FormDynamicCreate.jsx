import {useState} from 'react'
import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
export const FormDynamicCreate = ({fields = [], initialValues = {} , button = '', getValues}) => {

  const [formValues, setFormValues] = useState(initialValues);

  //para que se pueda inscribir en sus inputs
  const handleInputChange = ({target}) => {
    const { name, value } = target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

  };
  const onFormSubmit = (e)=>{
    e.preventDefault();
    getValues(formValues);
    setFormValues(initialValues)
  }
  return (
    <form className="flex flex-col p-5 text-dark" onSubmit={onFormSubmit} >
      {
        fields.map((field,i)=>(
          <div className='flex flex-col' key={i}>
            <label className='text-md font-black mb-2 mt-1'>{field.label}</label>
            <input className='rounded-md p-2 bg-slate-100' type={field.type} 
            name={field.name} 
            value={formValues[field.name]}
            placeholder={"Introduce tus datos.."}
            onChange={handleInputChange}
            />
          </div>
        ))
      }
      <input className='bg-primary mt-5 p-3 text-lg text-white font-semibold rounded-xl cursor-pointer'  type="submit" value={button} />
    </form>
  )
}

FormDynamicCreate.proptypes = {
  fields: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  button: PropTypes.string.isRequired,
  getValues: PropTypes.func
}

