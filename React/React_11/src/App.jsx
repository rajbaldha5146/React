import './App.css'
import { useForm } from "react-hook-form";

function App() {

  const { register, handleSubmit, watch, formState: { errors , isSubmitting } , } = useForm();

  async function onSubmit(data){
    //API call ko simmulate karte hai
    
      await new Promise((resolve)=> setTimeout (resolve,5000));

      console.log("Submiting The Data", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>First Name: </label>
        <input 
        className={errors.firstName ? 'input-error' : ""}
        {...register('firstName',
          { 
            required: true, 
            minLength: {value:3 ,message:"Min Length Is 3"}, 
            maxLength: {value:5 ,message:"Max Length Is 5"}
          }
        )} />
      
      {errors.firstName && <h4 className="error-msg">{errors.firstName.message}</h4>}

      </div>

      <br/>

      <div>
        <label> Middle Name: </label>
        <input {...register('middleName')} />
      </div>

      <br/>

      <div>

        <label> Last Name: </label>
        <input 
        className= {errors.lastName ? 'input-error' : ""}
        {...register('lastName' , 
        { pattern:{
            value: /^[A-Za-z]+$/i ,
            message: "Last Name not as per rules"
          }
        }
        )} />
        {errors.lastName && <h4 className="error-msg">{errors.lastName.message} </h4> }

      </div>
      
      <br/>


      <input type='submit' disabled={isSubmitting} 
      value={isSubmitting ? "Submitting" : "Submit"}
        
      />
    </form>
  )
}

export default App
