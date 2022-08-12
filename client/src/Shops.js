import React from 'react'
import { useNavigate } from 'react-router'
import { Button, Container } from '@mui/material'

function Shops({shop}) {
  const navigate = useNavigate()

  function renderShopProducts() {
    
    navigate()
  }

  return ( 
    <Container>
      <>
      <div style={{
        position: "absolute",
        marginLeft: 30,
        marginTop: 30,
        marginRight: 15
      }}>
        <br/>
        <br/>     
        <h1>{shop.name}</h1>
      {/* <div style={{
          position: "relative",
          marginLeft: 700,
          marginTop: 40,
          marginBottom: 0,
          marginRight: 460
        }}> */}
        <h3>{shop.description}</h3>
        <span>Hours: 
        <br/>{shop.hours}</span>
        <br/>
        <br/>
        <span>Phone: 
        <br/>{shop.phone}</span>
        <br/>
        <br/>
        Address:
        <br/>
        {shop.shop_address.street}
        <br/>
        {shop.shop_address.city}, {shop.shop_address.state}&nbsp;{shop.shop_address.zip_code}
        <br/>
        <br/>
        <Button onClick={renderShopProducts} variant="contained">Browse Products</Button>
      {/* </div> */}
      {/* <img style={{
        position: "relative",
        marginBottom: 80,
        marginTop: -200
      }}
      alt={shop.description} src={shop.image}/> */}

      </div>
    </>
    </Container>
  )
}

export default Shops