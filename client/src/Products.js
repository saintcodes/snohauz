import React, { useState, useEffect } from 'react'
import { Button, Container } from '@mui/material'
import ProductShops from './ProductShops'
import Reviews from './Reviews'

function Products({user, product}) {
  const [productShops, setProductShops] = useState([])
  const [show, setShow] = useState(false)
  const [showReviews, setShowReviews] = useState(false)
  const [reviews, setReviews] = useState([]) 
  const [refreshReview, setRefreshReview] = useState(false)

  useEffect(() => {
    fetch(`/reviews/${product.id}`)
    .then(res => res.json())
    .then(reviews => setReviews(reviews))
  }, [refreshReview])

  const renderNew = (review) => {
    setReviews([...reviews, review])
  }

  const renderProductShops = (product) => {
    setShow(show => !show)
    fetch(`/products/shops/${product.name}`)
      .then(res => res.json())
      .then(productShops => setProductShops(productShops))
  }

  const renderReviews = () => {
    setRefreshReview(refreshReview => !refreshReview)
    setShowReviews(showReviews => !showReviews)
  }

  const handleDelete = (e) => {
    let reviewId = parseInt(e.target.id)
    console.log('hello')
    console.log(reviewId)
    fetch(`/reviews/${reviewId}`, {
      method: "DELETE"
    })
    setRefreshReview(!refreshReview)
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
        <img 
          style={{
            position: "relative",
            maxHeight: 300,
            marginBottom: 10,
            marginTop: 0
          }}
          alt={product.description} 
          src={product.image}
          loading="lazy"
        />
          <div style={{position: "relative", marginLeft: 400, marginTop: -330, marginRight: 280}}>
            <h4><em>{product.description}</em></h4>
            <p>
              <h3>Price: ${product.price}</h3>
              <br/>
              <br/>
            </p>
            <Button
              id={product.id}
              variant={show ? "outlined" : "contained"}
              onClick={() => renderProductShops(product)}
            >
              {show ? "Hide Shops": "Rentals"}
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              id={product.id}
              color="secondary"
              variant={showReviews ? "outlined" : "contained"}
              onClick={() => renderReviews(product)}
            >
              {showReviews ? "Hide Reviews": "Reviews"}
            </Button>
          </div>
        </div>
      </Container>
      <Container>
        {show ? 
        <ProductShops
          user={user} 
          product={product} 
          productShops={productShops}
        /> : null}
        {showReviews ? 
        <Reviews
          handleDelete={handleDelete}
          refreshReview={refreshReview}
          setRefreshReview={setRefreshReview}
          renderNew={renderNew}
          user={user} 
          product={product} 
          reviews={reviews}
          setReviews={setReviews}
        /> : null}
      </Container>
    </>
  )
}

export default Products