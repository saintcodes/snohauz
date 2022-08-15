import React, {useState} from 'react'
import { Button, Stack, Grid, Modal, FormControl, TextField, Box, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function ShopProducts({shopProducts, shop}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("")
  const [selectedProduct, setSelectedProduct] = useState({
    "name": "",
    "description": ""
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
  
  function handleReservation (e) {
    console.log(e.target)
  }

  const handleOpen = (product) => {
    setOpen(true)
    setSelectedProduct(product)
  }

  const handleClose = () => {
    setOpen(false)
  }
console.log(value)

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
      {shopProducts.map(product => 
        <Grid
          key={product.id}
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
            src={product.image} 
            alt={product.name}
          />
          <div style={{position: "relative", left: 450, top: -350, maxWidth: "60%"}}>
            <h3>{product.name}</h3>
            <br/>
            <span>{product.description}</span>
            <br/><br/>
            <Button 
              onClick={() => handleOpen(product)} 
              color="secondary" 
              variant="contained"
            >
              Reserve Now!
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
          <strong><em>{selectedProduct.name}</em></strong>
          </span>
          <p>{shop.name}</p>
        </Typography>
        <br/>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
        >
          <DateTimePicker
            color="primary"
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            onChange={
              (newValue) => {
              setValue(newValue);
            }
          }
          />
          <br/>
          <br></br>
          <Button 
            onClick={handleReservation} 
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

export default ShopProducts