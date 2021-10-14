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
class Login extends Component {
  render() {

    const responseSuccessGoogle = (response) =>{
      console.log(response);
      this.props.history.push("/users");
      /*
      axios({
        method: "POST",
        url: "http://localhost:3001/googlelogin",
        data: {tokenId: response.tokenId}
      }).then(response =>{
        console.log(response);
      });*/
    }

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
    const responseErrorGoogle = (response) =>{
      console.log("MAL");
    }

        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default Login;