import React, { Component } from 'react';
import { CssBaseline, Avatar, Box, Typography, Container, createTheme, ThemeProvider } from '@mui/material/';
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
    const responseGoogle = (response) => {
      console.log(response);
      axios.post(`http://localhost:3001/auth/google`, { token: response.tokenId })
        .then(resp => {
          console.log("Everything is ok, here's the token: ", resp.data);
          sessionStorage.setItem('token', resp.data);
          this.props.history.push("/users");
        })
        .catch(err => console.log('Was an error: ', err))
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
              Press button to Sign up with Google
            </Typography>
            <Box component="form">
              <br /><br />
              <GoogleLogin
                clientId="871739763343-2miis7h4hc28ce17v7t4spaneq5tkg49.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                  <GoogleButton onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
                )}
              />
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
    )
  };
}

export default Login;