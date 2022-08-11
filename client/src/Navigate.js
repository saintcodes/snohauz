import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import { Avatar, IconButton, Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Main from './Main'

function Navigate({user, setUser}) {
  const navigate = useNavigate()
  const drawerWidth = 240
  const theme = useTheme();
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {setOpen(true)}
  const handleDrawerClose = () => {setOpen(false)}

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' }) (
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );
  
  const MuiAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,           
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

  function handleLogout() {
    console.log('123')
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(false);
      }
    })
    .then(navigate("/"));
  }

  const handleNavigate = (e) => {
    navigate(`/${e.target.innerHTML}`)
  }

  return ( 
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MuiAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" onClick={() => navigate('/main')}>
            snohous
          </Typography>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <div><img style={{maxWidth: 250}} alt="user" src={user.image}/></div>
        <Divider />
        <List>
          {['Main', 'Reservations', 'Profile'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleNavigate}>
                <ListItemIcon>
                  {text === 'Main' ? <HomeIcon /> : text === 'Reservations' ? <BookOnlineIcon /> : <AccountBoxIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem key={'logout'} disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <br/>
      <br/>
      <br/>
      <Main open={open}/>
    </Box>

      // <Container className="navigation-container">
      //    {user && user.username ? (
      //   <Nav id='nav-bar'>
      //     <h3 className='logo-header'>SnoHauz</h3>
      //     <br></br>
      //       <span className='user-span'>
      //         Welcome, <strong><em>{user.username}!</em></strong>
      //       </span>
      //       &nbsp;&nbsp;
      //         <Avatar alt={user.username} src={user.image} /> 
      //     <br></br>
      //     <ul><Nav.Link href="/main">
      //       All Shops & Products
      //     </Nav.Link></ul>
      //     <br/>
      //     <ul><Nav.Link href="/reservations">
      //       Reservations
      //     </Nav.Link></ul>
      //     <br/>
      //     <ul><Nav.Link href="/my-profile">
      //       Profile
      //     </Nav.Link></ul>
      //     <br/>
      //     <ul><Nav.Link href="/" onClick={() => handleLogout()}>
      //       Logout
      //     </Nav.Link></ul>
      //   </Nav>
      // ): null}
      // </Container>
  )
}

export default Navigate