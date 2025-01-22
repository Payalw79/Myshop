import React from 'react'
import {useForm} from 'react-hook-form'

function Form2() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      function display(data){
            console.log(data)
      }
      
  return (
    <div>
       <div>
      <form onSubmit={handleSubmit(display)}>
    <div>
    <label>Username</label>
    <input type='text' placeholder='Username' {...register("name")}></input>
    </div>
       <div>
       <label>Password</label>
       <input type='password' placeholder='Password' {...register("password")}></input>
       </div>
        <div>
        <label>Email</label>
        <input type='text' placeholder='Email' {...register("email")}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  
    </div>
  )
}

export default Form2
