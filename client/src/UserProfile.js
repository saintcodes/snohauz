import React, { useState, } from 'react'
import { Box, Modal, Container, TextField, Button } from '@mui/material'

function UserProfile({setUser, user}) {
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    image: "",
  });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = (user) => {setOpen(true)}
  
  const handleClose = () => {setOpen(false)}

  function handleImageUpload(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData, user_id: user.id}),
    }).then((r) => {
      if (r.ok) {
        r.json().then(user => setUser(user))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
      setFormData({
        image: ""
      })
    })
    setOpen(false)
    console.log('hello')
  }

  function handleChange(e) {
    const {name, value} = e.target
    setFormData((formData) => ({...formData,
      [name]: value
    }))
  }

  return (
    <Container
      sx={{
        position: "absolute",
        marginLeft: 30,
        marginTop: 15,
        marginRight: 15 
      }}
    >
      <br/>
      <h1>
        {user.username}
      </h1>
     <hr/>
      <br/>
      <p>{user.bio}</p>
      <br/>
     <div><img style={{maxWidth: 250}} alt="user" src={user.image}/></div>
      <br/>
      <Button onClick={handleOpen} variant="contained" color="warning">Edit Photo</Button>
      {open ? <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <strong><em>Upload Image URL</em></strong>
        <TextField 
          id="modal-modal-description" 
          sx={{ mt: 2 }}
          name="image"
          value={formData.image}
          onChange={handleChange}
        >
          {/* <span style={{display: 'flex'}}>
          </span> */}
          <br/>
        </TextField>
        <br/>
        <br/>
          <Button 
            onClick={(e) => handleImageUpload(e)} 
            variant="contained" 
            color="success"
          >
            Confirm
          </Button>
        </Box>
      </Modal>
      : null}
    </Container>
  )
}

export default UserProfile