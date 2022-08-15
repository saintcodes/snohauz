import React from 'react'
import { Button } from '@mui/material'

function Products({product}) {
  
  
  return (
    <>
      <div style={{
        position: "absolute",
        marginLeft: 30,
        marginTop: 30,
        marginRight: 15
      }}>
      <br/><br/>     
        <h1>{product.name}</h1>
      <div style={{
        position: "relative",
        marginLeft: 700,
        marginTop: 40,
        marginBottom: 0,
        marginRight: 460
      }}>
        <h3><em>{product.description}</em></h3>
        <h2><em>Price: </em>${product.price}</h2>
        <Button variant="contained">Rent Me!</Button>
      </div>
      <img 
        style={{
          position: "relative",
          marginBottom: 0,
          marginTop: -270
        }}
        alt={product.description} 
        src={product.image}
      />
      </div>
    </>
  )
}

export default Products