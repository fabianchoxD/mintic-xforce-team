import React, { Component } from 'react';
import {CssBaseline,Avatar,Box,Typography,Container,createTheme,ThemeProvider} from '@mui/material/';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Header from '../components/Header'
import Footer from '../components/Footer'
import GoogleLogin from 'react-google-login'
import GoogleButton from 'react-google-button'
import '../styles/Login.css';
import axios from 'axios';

const theme = createTheme();

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="xs" className="login">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Press button to Sign up with Google          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Link to="/users" className="a">
            <GoogleButton/>
            </Link>
          </Box>
          <Box sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          </Box>

        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default Login;