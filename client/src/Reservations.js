import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Button, Stack, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete'

function Reservations({refreshReso, setRefreshReso}) {
  const [reservations, setReservations] = useState([])
  // const [refreshReso, setRefreshReso] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [selectedRes, setSelectedRes] = useState()

  useEffect(() => {
    fetch('/reservations')
    .then(response => response.json())
    .then(reservations => setReservations(reservations))
  }, [refreshReso])
  
  window.scrollTo(0,0)
  

  const handleExpandClick = (e, reservation) => {
    setSelectedRes(parseInt(e.target.id))
    reservations.map((reservation) => {
      if (reservation.id === selectedRes) {
        setExpanded(!expanded)
      } else {
        console.log('testing')
      }
    })
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })
    (({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleCancel = (reservation) => {
    console.log(reservation.id)
    fetch(`/reservations/${reservation.id}`, {
      method: "DELETE"
    }).then((refreshReso) => (setRefreshReso(!refreshReso)))
  }

  return (
    <div style={{
      backgroundImage: "url('https://images.pexels.com/photos/290452/pexels-photo-290452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      height: '250vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
    <h2 style={{
      position: "absolute",
      marginLeft: 320,
      marginTop: 100
    }}><u>My Reservations</u></h2>
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="stretch"
      sx={{
        position: "absolute",
        marginLeft: 40,
        marginTop: 20,
        marginRight: 0
      }}
      // direction="row"
      cols={2}
    >
    {reservations.length>0 ? reservations.map((reservation, index) =>
      <Card key={index} sx={{ opacity: "0.9", maxWidth: 600 }}>
        <CardHeader
          title={reservation.shop.name}
          subheader={`${reservation.date} - ${reservation.time}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={reservation.product.image}
          alt={reservation.product.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {reservation.product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            id={reservation.id}
            expand={expanded}
            onClick={(e) => handleExpandClick(e, reservation)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon id={reservation.id}/>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography items>
              <h4>
                <u>Shop Information:</u>
              </h4>
              {reservation.shop.name}<br/>
              {reservation.shop.hours}<br/>
              {reservation.shop.phone}<br/>
              <h4>
                <u>Product Information:</u>
              </h4>
              {reservation.product.name}
            </Typography>
            <br/>
            <Button 
              onClick={() => handleCancel(reservation)} 
              startIcon={<DeleteIcon />} 
              variant="contained" 
              color="error"
            >
                Cancel this Reservation
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    ): <h2 style={{color: 'gray'}}>You do not have any reservations yet</h2>}
    </Stack>
    </div>
  )
}

export default Reservations