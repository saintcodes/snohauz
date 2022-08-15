import React from 'react'
import { Button, Stack, Grid } from '@mui/material'

function ShopProducts({shopProducts}) {
  console.log(shopProducts)
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
            <br/>
            <br/>
            <Button color="secondary" variant="contained">Reserve Now!</Button>
          </div>
        </Grid>
      )}
    </Stack>
  )
}

export default ShopProducts