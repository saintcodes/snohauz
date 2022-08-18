import React, { useState } from 'react'
import { Button, Container } from '@mui/material'
import ProductShops from './ProductShops'

function Products({user, product}) {
  const [productShops, setProductShops] = useState([])
  const [show, setShow] = useState(false)

  const renderProductShops = (product) => {
    setShow(show => !show)
    fetch(`/products/${product.id}`)
      .then(res => res.json())
      .then(productShops => setProductShops(productShops.shop))
  }

  return (
    <>
      <Container>
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
          marginLeft: 550,
          marginTop: 40,
          marginBottom: 0,
          marginRight: 360
        }}>
          <h3><em>{product.description}</em></h3>
          <h2><em>Price: </em>${product.price}</h2>
          <Button 
            variant={show ? "outlined" : "contained"}
            onClick={() => renderProductShops(product)}
          >
            {show ? "Hide Stores": "Rent Me!"}
          </Button>
        </div>
        <img 
          style={{
            position: "relative",
            maxHeight: 500,
            marginBottom: 0,
            marginTop: -430
          }}
          alt={product.description} 
          src={product.image}
        />
        </div>
      </Container>
      <Container>
        {show ? 
        <ProductShops 
          user={user} 
          product={product} 
          productShops={productShops}
        /> : null}
      </Container>
    </>
  )
}

export default Products