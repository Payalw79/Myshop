import React, { useEffect, useRef, useState } from 'react'

function Form1() {
    let name=useRef();
    let password=useRef();
    let email=useRef();

    let [formdata,setformdata]=useState({
        name:'',
        password:'',
        email:''
    })

    function handleSubmit(event){
        event.preventDefault();

        setformdata({
            name:name.current.value,
            password:password.current.value,
            email:email.current.value
        })
       // console.log(formdata)
        // console.log(name.current.value);
        // console.log(password.current.value);
        // console.log(email.current.value);
    }
    useEffect(()=>{
        console.log(formdata);
    },[formdata])
  return (
    <div>
      <form onSubmit={handleSubmit}>
    <div>
    <label>Username</label>
    <input type='text' placeholder='Username' ref={name}></input>
    </div>
       <div>
       <label>Password</label>
       <input type='password' placeholder='Password' ref={password}></input>
       </div>
        <div>
        <label>Email</label>
        <input type='text' placeholder='Email' ref={email}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form1
