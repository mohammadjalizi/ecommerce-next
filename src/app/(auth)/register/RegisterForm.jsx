"use client"

import { useState } from "react"

const RegisterForm = () => {

const [name ,setName]=useState(null)
const [email ,setEmail]=useState(null)
const [password ,setpassword]=useState(null)

    const handelsubmit= async (eo) => { 

eo.preventDefault()

const response = await fetch("api/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password}),
    // ...
  });


  console.log(response)
     }
  return (
    <div>
        
        <form onSubmit={handelsubmit} style={{ textAlign: "left" }}>
    <div className="mb-4">
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input
      onChange={(eo)=>{
setName(eo.target.value)

      }}
      required
        type="text"
        className="form-control"
        id="username"
        aria-describedby="emailHelp"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
          onChange={(eo)=>{
            setEmail(eo.target.value)
            
                  }}
      required
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
          onChange={(eo)=>{
            setpassword(eo.target.value)
            
                  }}
      required
        type="password"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Create Account
    </button>
  </form>


    </div>
  )
}

export default RegisterForm