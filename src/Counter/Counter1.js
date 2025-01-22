import React, { useMemo, useReducer } from 'react'
import { useState } from 'react'


function Counter1() {

  //  let [value,setcounter]=useState(0)

    // function increment(){
    //     setcounter(value=value+1)
    // }

    // function decrement(){
    //     setcounter(value=value-1)
    // }

function reducer(state,action){
    if(action.type==='increment'){
        return state=state+1
    }
    else if(action.type==='decrement'){
        return state=state-1
    }
    else if(action.type==='reset'){
        return state=initialstate;
    }
}

    let initialstate=0
    let [state,dispatch]=useReducer(reducer,initialstate)


   function square(num){
    for (let i = 0; i < 1000000000 ; i++) {
        
    }
    return num * num;
   }
let num=5;

if(state==5){
  throw new Error("Error Occured")
}
useMemo(()=>{
    square(num)
},[num])

  return (
    <div>
        {/* <h1>{value}</h1>
        
      <button onClick={()=>setcounter(value=value+1)}>+</button>
      <button onClick={()=>setcounter(value=value-1)}>-</button> */}

      <h1>{state}</h1>
        
        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

    </div>
  )
}

export default Counter1
