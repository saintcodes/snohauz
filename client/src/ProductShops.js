import React, { useState } from 'react'
import { Button, Stack, Grid, Modal, TextField, Box, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useNavigate } from 'react-router-dom'

function ProductShops({user, product, productShops}) {
  console.log('hello from ProductShops', productShops)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null)
  const [selectedShop, setSelectedShop] = useState({
    "name": ""
  })

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

  const handleOpen = (shop) => {
    setOpen(true)
    setSelectedShop(shop)
  }

  const handleClose = () => {setOpen(false)}

  function handleReservation (selectedShop) {
    let dateTime = value.toString()
    let date = dateTime.slice(4,15)
    let h = value.getHours()
    let AMorPM = h < 12 ? "AM":"PM"
    let minutes = value.getMinutes()
    let hours = ((h + 11) % 12 + 1)
    let time = `${hours}:${minutes} ${AMorPM}`
    console.log(dateTime, value, date, hours, minutes, time)

    fetch('/reservations', {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        user_id: user.id,
        product_id: product.id,
        shop_id: selectedShop.id,
        date: date,
        time: time
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(navigate('/reservations'))
  }

  return (
    <Stack 
      spacing={2}
      justifyContent="center"
      alignItems="stretch"
      sx={{
        position: "absolute",
        marginLeft: 0,
        marginTop: 70,
        marginRight: 15
      }}
    >
      {productShops.map(product => 
        <Grid
          key={product.shop.id}
          sx={{
            border: 1,
            borderColor: 'primary.main',
            backgroundColor: "yellow",
            borderRadius: '16px',
            maxHeight: "400px"
          }}
        >
          <img 
            style={{width: "25%", marginTop: 20, marginLeft: 20}} 
            src={product.shop.image} 
            alt={product.shop.name}
          />
          <div style={{position: "relative", left: 450, top: -350, maxWidth: "60%"}}>
            <h3>{product.shop.name}</h3>
            <span>{product.shop.description}</span>
            <br/>
            <br/>
            <Button 
              onClick={() => handleOpen(product.shop)} 
              color="secondary" 
              variant="contained"
            >
              Reserve Here!
            </Button>
          </div>
        </Grid>
      )}
      {open ? <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <span style={{display: 'flex'}}>
          <strong><em>{selectedShop.name}</em></strong>
          </span>
          <br/>
          <span>{product.name}</span>
        </Typography>
        <br/>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
        >
          <DateTimePicker
            color="primary"
            clearable
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            onChange={(newValue) => {setValue(newValue)}}
          />
          <br/>
          <br></br>
          <Button 
            onClick={() => handleReservation(selectedShop)} 
            variant="contained" 
            color="success"
          >
            Confirm Reservation
          </Button>
        </LocalizationProvider>
        </Box>
      </Modal>
      : null}
    </Stack>
  )
}

export default ProductShops