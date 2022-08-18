import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Button, Stack, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Reservations() {
  const [reservations, setReservations] = useState([])
  const [refreshReso, setRefreshReso] = useState(true)
  const [expanded, setExpanded] = useState(false)
  
  useEffect(() => {
    fetch('/reservations')
    .then(res => res.json())
    .then(reservations => setReservations(reservations))
  }, [refreshReso])
  
  const handleExpandClick =() => setExpanded(!expanded)

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
    <>
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
    {reservations.map((reservation, index) =>
      <Card key={index} sx={{ maxWidth: 600 }}>
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
            expand={expanded}
            onClick={() => handleExpandClick(index)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
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
            {/* <Button onClick={() => handleModify(reservation)} variant="contained" color="success">Modify this Reservation</Button>
            &nbsp;&nbsp;&nbsp; */}
            <Button onClick={() => handleCancel(reservation)} variant="contained" color="error">Cancel this Reservation</Button>
          </CardContent>
        </Collapse>
      </Card>
    )}
    </Stack>
    </>
  )
}

export default Reservations