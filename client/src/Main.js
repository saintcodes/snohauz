import React, { useEffect, useState } from 'react'
import { TextField, Container, Box, IconButton, Stack, ImageList, ImageListItemBar, ImageListItem} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom'
import background from "./images/pexels-oleksandr-pidvalnyi-12955948.jpg"

// client/public/pexels-oleksandr-pidvalnyi-12955948.jpg
function Main({user, selectedProduct, selectedShop}) {
  const [shops, setShops] = useState([])
  const [products, setProducts] = useState([])
  const [searchShop, setSearchShop] = useState("")
  const [searchProduct, setSearchProduct] = useState("")
  const navigate = useNavigate()

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
  const handleShopSearch = (e) => {setSearchShop(e.target.value)}
  const handleProductSearch = (e) => {setSearchProduct(e.target.value)}

  function renderProduct(product) {
    fetch(`products/${product.id}`)
      .then(res => res.json())
      .then(selectedProduct(product))
      .then(navigate(`/products/${product.name}`))
  }

  function renderShop(shop) {
    fetch(`shops/${shop.id}`)
      .then(res => res.json())
      .then(selectedShop)
      .then(navigate(`/shops/${shop.name}`))
  }

  const myStyle={
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height:'350vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
  };
  
  return (
    <div style={myStyle}>
      <Container fixed sx={{
        position: "absolute",
        marginLeft: 10,
        marginTop: 10,
        marginRight: 15,
      }}>
        <div style={{fontSize: "x-large", color: 'white', margin: 'auto', alignText: 'center'}}>
          <strong><em>All Shops</em></strong>
        </div>
        <hr/>
        <Box
          sx={{
            '& .MuiTextField-root': { textTransform: 'uppercase', m: 3, width: '25%' }
          }}
          noValidate
          autoComplete="off"
        >
          <div> 
            <TextField 
              fullWidth
              id="Outlined warning fullwidth" 
              color='primary' 
              label="Search by Shop Name" 
              focused
              type="search"
              onChange={handleShopSearch}
            />
          </div>
        </Box>
          <ImageList 
            sx={{ 
              width: 1100, 
              height: 800, 
              justifyContent: 'center',
              margin: "auto",
            }} 
            cols={4}
            gap={16}
          >
            {searchShops.map((shop) => (
              <ImageListItem
              key={shop.id}
              // onClick={()=>handleOpen(shop)}
              sx={{border: 1, maxHeight: 400, maxWidth: 400}}  
              >
                <img
                  src={`${shop.image}?w=164&fit=crop&auto=format`}
                  srcSet={`${shop.image}?w=164&fit=crop&auto=format&dpr=2 1x`}
                  alt={shop.id}
                  loading="lazy"
                />
              <ImageListItemBar
                title={shop.name}
                subtitle={shop.description}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    onClick={() => renderShop(shop)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
                sx={{height: 75}}
              />
              </ImageListItem>
            ))}
          </ImageList>
          <br/>
          <span style={{fontSize: "x-large", color: 'white'}}>
            <strong><em>All Products</em></strong>
          </span>      
        <hr/>
        <Box
          sx={{
            '& .MuiTextField-root': { textTransform: 'uppercase', m: 3, width: '25%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div> 
            <TextField 
              fullWidth
              size="large"
              id="Outlined warning fullwidth" 
              color="primary" 
              label="Search by Product Name" 
              focused
              type="search" 
              onChange={handleProductSearch}
            />
          </div>
        </Box>
          <ImageList 
            sx={{ 
              width: 1100, 
              height: 800, 
              justifyContent: 'center', 
              margin: 'auto'
            }} 
            cols={4}
            gap={16}
          >
            {searchProducts.map((product) => (
              <ImageListItem
                key={product.id}
                sx={{border: 1, maxHeight: 400, maxWidth: 400}}
              >
                <img
                  src={`${product.image}?w=164&fit=crop&auto=format`}
                  srcSet={`${product.image}?w=164&fit=crop&auto=format&dpr=2 1x`}
                  alt={product.id}
                  loading="lazy"
                />
              <ImageListItemBar
                title={product.name}
                subtitle={product.description}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    onClick={() => renderProduct(product)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
                sx={{height: 75}}
              />
              </ImageListItem>
            ))}
          </ImageList> 
      </Container>
    </div>
  )
}

export default Main