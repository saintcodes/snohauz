import React, { useState } from 'react'
import { Button, Stack, Grid, Modal, TextField, Box, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useNavigate } from 'react-router-dom'

function ProductShops({user, productShops}) {
  console.log('hello from ProductShops', productShops)
  return (
    <Stack 
      spacing={2}
      justifyContent="center"
      alignItems="stretch"
      sx={{
        position: "absolute",
        marginLeft: 0,
        marginTop: 95,
        marginRight: 15
      }}
    >

      {productShops.map(shop => 
        <Grid
          key={shop.id}
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
            src={shop.image} 
            alt={shop.name}
          />
          <div style={{position: "relative", left: 450, top: -350, maxWidth: "60%"}}>
            <h3>{shop.name}</h3>
            <br/>
            <span>{shop.description}</span>
            <br/><br/>
            <Button 
              // onClick={() => handleOpen(product)} 
              color="secondary" 
              variant="contained"
            >
              Reserve Now!
            </Button>
          </div>
        </Grid>
      )}
    </Stack>
  )
}

export default ProductShops