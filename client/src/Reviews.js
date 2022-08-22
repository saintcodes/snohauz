import React, { useState } from 'react'
import { FormControl, InputLabel, Input, Rating, Box, Button, Typography, Grid, Stack } from '@mui/material'

function Reviews({user, refreshReview, handleDelete, setRefreshReview, renderNew, reviews, setReviews, product}) {
  const [open, setOpen] = useState(true)
  const [formData, setFormData] = useState({
    rating: 0.0,
    comment: ""
  })

  const handleOpen = () => setOpen(!open)

  const handleNewReview = (product) => {
    console.log(formData)
    fetch('/reviews', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        user_id: user.id,
        product_id: product.id
      })
    }).then(res => res.json())
    .then(review => renderNew(review))
    setFormData({
      rating: 0.0,
      comment: ""
    })
  } 

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData,
      [name]: value})
    console.log(name, value)
  }

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
      {reviews.map(review =>
        <Grid
          key={review.id}
          sx={{
            border: 1,
            borderColor: 'primary.main',
            // backgroundColor: 'blue',
            borderRadius: '16px',
            width: "200%"
            // maxWidth: "300px"
            // maxHeight: "900px
          }}
        >
          <div style={{position: "relative", left: 30, top: 10, maxWidth: "100%"}}>
            <Box
              sx={{
                '& > legend': {mt: 2}
              }}
            >
              <Typography component="legend"></Typography>
              <Rating size="large" name="read-only" value={review.rating} precision={0.5} readOnly />
            </Box>
            <h4>{review.comment}</h4>
            
            <span
              maxLength="10"
            ><strong>Submitted</strong>&nbsp;{review.created_at}</span>
            <br/>
            <span><strong>By</strong>&nbsp;{review.user.username}</span>
            <br/>
            <br/>
            {user.id === review.user.id ? <Button id={review.id} onClick={handleDelete} color="error" variant="contained">Delete Review</Button> : null}
            <br/>
            <br/>
          </div>
        </Grid>)}
        {open? <Button 
          onClick={() => handleOpen()}
          color={open ? "warning" : "error"} 
          variant={open ? "contained" : 'outlined'}
        >
            {open ? "Write a new review!" : "Cancel"}
        </Button> : null }
        <br/>
        {open ? null :
          <FormControl
            open={open}
            // onClose={handleClose}

            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <br/>
            <br/>
            <InputLabel htmlFor="my-input">Write your review here...</InputLabel>
            <Input 
              id="my-input"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              aria-describedby="my-helper-text" 
            />
            <br/>
            <Typography component="legend">Give it a rating!</Typography>
            <Rating
              name="rating"
              size="large"
              precision={0.5}
              value={formData.rating}
              onChange={handleChange}
            />
            <br/>
            <Box>
              <Button 
                  onClick={() => setOpen(!open)} 
                  variant="outlined" 
                  color="error"
                >
                  Cancel
              </Button>
                &nbsp;&nbsp;&nbsp;
              <Button 
                onClick={() => handleNewReview(product)}
                type="submit"
                variant="contained" 
                color="success"
              >
                Submit Review
              </Button>
            </Box>
          </FormControl>
        }
        <br/>
        <br/>
        <br/>
    </Stack>
  )
}

export default Reviews