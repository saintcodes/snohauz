import React, { useState } from 'react'
import { Button, Container } from '@mui/material'
import ShopProducts from './ShopProducts'

function Shops({user, shop, refreshReso, setRefreshReso}) {
  const [shopProducts, setShopProducts] = useState([])
  const [show, setShow] = useState(false)

  function renderShopProducts(shop) {
    setShow(show => !show)
    fetch(`/shops/${shop.id}`)
      .then(res => res.json())
      .then(shopProducts => setShopProducts(shopProducts.products))
  }

  window.scrollTo(0,0)

  return ( 
    <div style={{
      backgroundImage: "url('https://images.pexels.com/photos/290452/pexels-photo-290452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      height: '360vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      <Container>
        <div style={{
          position: "absolute",
          marginLeft: 0,
          marginTop: 30,
          marginRight: 0
        }}>
          <br/><br/>
          <a style={{color: 'blue'}}href="/main">Back to Main</a>
          <br/>
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
          <div style={{position: 'relative', marginLeft: 480, marginTop: -330}}>
            <h3>{shop.description}</h3>
            <span>Hours: 
            <br/>{shop.hours}</span>
            <br/><br/>
            <span>Phone: 
            <br/>{shop.phone}</span>
            <br/><br/>
            Address:
            <br/>
            217 E 60th St Lower Level
            <br/>
            New York, NY 10065
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
        {show ? 
        <ShopProducts 
          user={user} 
          shop={shop} 
          shopProducts={shopProducts}
          refreshReso={refreshReso}
          setRefreshReso={setRefreshReso}
        /> : null}
      </Container>
    </div>
  )
}

export default Shops