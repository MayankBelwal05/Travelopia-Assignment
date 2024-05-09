import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const drawerWidth = 260;

function DrawerAppBar(props) {
  const navigate = useNavigate(); 
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const userData = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = !!userData;
  const username = userData ? userData.name : '';


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
   
    toast(`${username} logged Out!`)
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    

    setTimeout(()=>{
      navigate("/login")

    },1000)
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      T R A V E L O P I A  💡
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Home" />
            </Link>
          </ListItemButton>
        </ListItem>
        {isLoggedIn && (
          <>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary="User Login" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to="/adminlogin" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary="Admin Login" />
                </Link>
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
      {isLoggedIn && (
        <>
          <Divider />
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Logged in as: {username}
          </Typography>
          <Button onClick={handleLogout} sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    border: '1px solid #fff',
                    borderRadius: '5px',
                  }}>Logout</Button>
        </>
      )}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      {/* <AppBar component="nav" sx={{ minHeight: '80px' }}>  */}
      <AppBar component="nav" sx={{ minHeight: '80px', backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
  variant="h6"
  component="div"
  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, marginLeft: '50px' }}
>
  <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
  🏔️  T  R  A  V  E  L  O  P  I  A   
  </Link>
</Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {isLoggedIn ? (
              <div style={{display:'flex',gap:"20px",alignItems:'center'}}>
                <Typography variant="h6" sx={{ color: '#fff' }}>Hello  👋  {username}</Typography>
                <Button onClick={handleLogout} sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    border: '1px solid #fff',
                    borderRadius: '5px',
                  }}>Logout</Button>
              </div>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    marginRight: '10px',
                    border: '1px solid #fff',
                    borderRadius: '5px',
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/adminlogin"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    border: '1px solid #fff',
                    borderRadius: '5px',
                  }}
                >
                  Admin Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0, marginTop: 0 }}>
        <Toolbar />
      </Box>
      <ToastContainer />
    </Box>
    
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
