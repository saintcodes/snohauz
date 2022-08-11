import React, { useEffect, useState } from 'react'
import { TextField, Box, IconButton, Stack, ImageList, ImageListItemBar, ImageListItem} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';

function Main({open}) {
  const [shops, setShops] = useState([])
  const [products, setProducts] = useState([])
  const [searchShop, setSearchShop] = useState("")
  const [searchProduct, setSearchProduct] = useState("")

  useEffect(() => {
    fetch('./shops')
      .then(res => res.json())
      .then(shops => setShops(shops))
  },[])

  useEffect(() => {
    fetch('./products')
      .then(res => res.json())
      .then(products => setProducts(products))
  }, [])

  const searchShops = shops.filter((shop) => shop.name.toLowerCase().includes(searchShop.toLowerCase()))
  const searchProducts = products.filter((product) => product.name.toLowerCase().includes(searchProduct.toLowerCase()))
  
  const handleShopSearch = (e) => {
    setSearchShop(e.target.value)
  }

  const handleProductSearch = (e) => {
    setSearchProduct(e.target.value)
  }

  return (
    <Stack
      sx={{
        position: "absolute",
        marginLeft: 10,
        marginTop: 10,
        marginRight: 15 
      }}>
        <span style={{fontSize: "x-large"}}>
          <strong><em>All Shops</em></strong>
        </span>
      <hr/>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div> 
          <TextField 
            fullWidth
            id="Outlined secondary fullwidth" 
            color="secondary" 
            label="Search shop name" 
            focused
            type="search"
            onChange={handleShopSearch}
          />
        </div>
      </Box>
        <ImageList 
          sx={{ 
            width: 1100, 
            height: 1200, 
            position: "relative", 
            top: 0,
            left: 0,
            backgroundColor: 'white',
            '&:hover': {
              color: 'red',
              backgroundColor: 'primary'
            }
          }} 
          cols={4}
          gap={24}
        >
          {searchShops.map((shop) => (
            <ImageListItem
            key={shop.id}
            // onClick={()=>handleOpen(shop)}
            sx={{'&:hover': {color: 'red', backgroundColor: 'white'}}}  
            >
              <img
                src={`${shop.image}?w=248&fit=crop&auto=format`}
                srcSet={`${shop.image}?w=248&fit=crop&auto=format&dpr=2 1x`}
                alt={shop.id}
                // value={shop.user_id}
                loading="lazy"
              />
            <ImageListItemBar
              title={shop.name}
              subtitle={shop.description}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  onClick={() => (console.log('hello'))}
                >
                  <InfoIcon />
                </IconButton>
              }
              sx={{height: 125}}
            />
            </ImageListItem>
          ))}
        </ImageList>
      <br/>
      <br/>
      <br/>
        <span style={{fontSize: "x-large"}}>
          <strong><em>All Products</em></strong>
        </span>      
        <hr/>
        <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div> 
          <TextField 
            fullWidth
            id="Outlined secondary fullwidth" 
            color="secondary" 
            label="Search by Product" 
            focused
            type="search" 
            onChange={handleProductSearch}
          />
        </div>
      </Box>
        <ImageList 
          sx={{ 
            width: 2100, 
            height: 1200, 
            position: "relative", 
            top: 0,
            left: 0,
            backgroundColor: 'black',
            '&:hover': {
              color: 'red',
              backgroundColor: 'white'
            }
          }} 
          cols={5}
          gap={24}
        >
          {searchProducts.map((product) => (
            <ImageListItem
            key={product.id}
            onClick={() => (console.log('hello'))}
            sx={{
              '&:hover': {
                color: 'red', 
                backgroundColor: 'white',
                fit: ""
              }
            }}
            >
              <img
                className="photo"
                src={`${product.image}?w=248&fit=crop&auto=format`}
                srcSet={`${product.image}?w=248&fit=crop&auto=format&dpr=2 1x`}
                alt={product.id}
                // value={product.user_id}
                loading="lazy"
              />
            <ImageListItemBar
              title={product.name}
              subtitle={product.description}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  onClick={() =>(console.log('hello'))}
                >
                  <InfoIcon />
                </IconButton>
              }
              sx={{height: 125}}
            />
            </ImageListItem>
          ))}
        </ImageList>
    </Stack>
  )
}

export default Main