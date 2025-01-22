import React from 'react'
import { useForm } from 'react-hook-form'
import './form.css'
function Form3() {
    let {register,handleSubmit,formState:{errors},watch}=useForm()
    
    let name=watch("name");

  return (
    <div>
         <form onSubmit={handleSubmit((formdata)=>{console.log(formdata);})}>

        <div>
                <label>Username</label>
                <input type='text' {...register("name",{required:{value:true,message:"It is required"},minLength:{value:3,message:"Length should be more than 3"}})}></input>
                {errors.name && <p className='p'>{errors.name.message}</p>}
        </div>

        <div>
                <label>Password</label>
                <input type='text' {...register("password",{pattern:{value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*():]).{8,}$/,message:"Please match the pattern Atleast 1 uppercase Atleast 1 lowercase Atleast 1 symbol Length must be minimum 8 characters "}})}></input>
                {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
                <label>Language</label>
                <select {...register("lang")}>
                    <option value={"english"}>English</option>
                    <option value={"hindi"}>Hindi</option>
                    <option value={"marathi"}>Marathi</option>
                </select>
          
        </div>
        <br></br>
    
        <button>Submit</button>
        </form> 
        <h1>Name:{name}</h1>         
    </div>
   
  )
}

export default Form3
