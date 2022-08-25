import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'

function Login({ setUser }) {
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((formData) => ({...formData,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
        navigate("/main")
        console.log('whatsup')
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setFormData({
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
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          name="username"
          label="Username"
          variant="filled"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="filled"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br></br>
        <div style={{ color: "red" }}>
          {errors.map((err) => (
            <div key={err}>{err}</div>
          ))}
        </div>
        <br></br>
        <Button type="submit" variant="contained">
          Sign In
        </Button>{" "}
        <br></br>
        <div>
          <br></br>
          Don't have an account?&nbsp;
          <a href="/sign-up">Sign up now!</a>
        </div>
      </Box>
    </div>
  );
}

export default Login;
