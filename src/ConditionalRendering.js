import React from 'react'

function ConditionalRendering() {

    let loggedin=true;
    let msg;

    if(loggedin){
        msg=<h1>Welcome to my page</h1>
    }
    else{
        msg=<h1>Please register first</h1>
    }
  return (
    <div>
      {msg}
    </div>
  )
}

export default ConditionalRendering
