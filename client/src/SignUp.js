import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'

function SignUp({user, setUser, onLogin}) {
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    password: "",
    hasAgreed: false
  })

  const handleChange = (e) => {
    console.log('hello')
    let target = e.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = target.name
    setSignUpForm((signUpForm) => ({...signUpForm,
      [name]: value
    }))
    console.log(signUpForm)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpForm)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signUpForm),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/main")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setSignUpForm({
      username: "",
      password: "",
    });
  }

  return (
    <div className="formTitleLink3">
      <div>
           <video id="background-video"  autoPlay loop muted>
          <source src='https://cdn.videvo.net/videvo_files/video/free/2014-01/large_watermarked/Snowboarding_offpiste_preview.mp4' type="video/mp4"/>
          </video>
         </div>
      <h1 id="brand-logo-login">snohaus</h1>
        <Box
          component="form"
          sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField 
            name="username" 
            label="Username" 
            variant="filled" 
            value={signUpForm.username} 
            onChange={handleChange} 
            required
          />
            <br/>
          <TextField 
            name="password" 
            label="Password" 
            type="password" 
            variant="filled" 
            value={signUpForm.password} 
            onChange={handleChange} 
            required
            helperText="Passwords must contain at least one upper case letter, one number, one special character, and be a minimum of 8 characters long"
          />
            <br></br>
          <div style={{color: "red"}}>
            {errors.map((err) => (
              <div key={err}>{err}</div>
            ))}
          </div>
            <br></br>
          <Button type="submit" variant="contained">Sign Up</Button> <br></br>
        <div>
            <br></br>
          Already have a snohaus account?&nbsp;
          <a href="/">
            Log in here!
          </a>
          <br></br>
          <br></br>
        </div>
       </Box>
      </div>
  )
}

export default SignUp