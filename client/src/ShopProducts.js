import React, {useState} from 'react'
import { Button, Stack, Grid, Modal, FormControl, TextField, Box, Typography } from '@mui/material'

function ShopProducts({shopProducts}) {
  const [open, setOpen] = useState(false);
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

  const handleReserve = (product) => {
    setOpen(true)
    setSelectedProduct(product)
  }

  const handleClose = () => {
    setOpen(false)
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
      {shopProducts.map(product => 
        <Grid
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
          <div
            style={{position: "relative", left: 450, top: -350, maxWidth: "60%"}}
          >
            <h3>
              {product.name}
            </h3>
            <br/>
            <span>
              {product.description}
            </span>
            <br/><br/>
            <Button onClick={() => handleReserve(product)} color="secondary" variant="contained">Reserve Now!</Button>
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
        </Typography>
          <br></br>
        </Box>
      </Modal>
      : null}
    </Stack>
  )
}

export default ShopProducts