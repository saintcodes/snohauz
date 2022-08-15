import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Container } from '@mui/material'
import ShopProducts from './ShopProducts'


function Shops({shop}) {
  const navigate = useNavigate()
  const [shopProducts, setShopProducts] = useState([])
  const [show, setShow] = useState(false)

  function renderShopProducts(shop) {
    console.log(shop.name, shop.id)
    setShow(show => !show)
    // navigate(`shops/${shop.id}/products`)
    fetch(`/shops/${shop.id}`)
      .then(res => res.json())
      .then(shopProducts => setShopProducts(shopProducts.products))
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
          <h1>{shop.name}</h1>
          <img 
            style={{
              position: "relative",
              maxHeight: 300,
              marginBottom: 10,
              marginTop: 0
            }}
            alt={shop.description} 
            src={shop.image}
            loading="lazy"
          />
          <div style={{position: 'relative', marginLeft: 580, marginTop: -330}}>
            <h3>{shop.description}</h3>
            <span>Hours: 
            <br/>{shop.hours}</span>
            <br/><br/>
            <span>Phone: 
            <br/>{shop.phone}</span>
            <br/><br/>
            Address:
            <br/>
            {/* {shop.shop_address.street}
            <br/>
          {shop.shop_address.city}, {shop.shop_address.state}&nbsp;{shop.shop_address.zip_code} */}
            <br/><br/>
            <Button 
              id={shop.id} 
              variant={show ? "outlined" : "contained"}
              onClick={() => renderShopProducts(shop)} 
              >
                {show ? "Hide Products" : "Browse Products"}
            </Button>
          </div>
        </div>
      </Container>
      <Container>
        {show ? <ShopProducts shopProducts={shopProducts}/> : null}
      </Container>
    </>
  )
}

export default Shops