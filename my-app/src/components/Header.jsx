import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import swal from "sweetalert";

/* CSS */
import "../styles/Header.css";

const Header = () => {
    return (
        <React.Fragment>
            <AppBar className="appBar" position="fixed" elevation={4}>
                <Toolbar>
                    <Link to="/home" style={{ textDecoration: 'none', display: 'flex' }}>
                        <Avatar alt="Bag" src="https://i.pinimg.com/736x/23/f7/c4/23f7c4409cb3b22e3e77f71ee7fefc9a.jpg" />
                        <Typography
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'white', marginTop: '3px' }}
                            variant="h6"
                            sx={{ flexGrow: 1 }}
                        >
                            &nbsp; Megasales
                        </Typography>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> </Typography>
                    {
                        (
                            window.location.pathname === '/Login' || window.location.pathname === '/login' ||
                            window.location.pathname === '/sales' || window.location.pathname === '/Sales' ||
                            window.location.pathname === '/products' || window.location.pathname === '/Products' ||
                            window.location.pathname === '/users' || window.location.pathname === '/Users'
                        )
                            ? (null) :
                            (
                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                    <Button id="btn" onClick="" endIcon={<LoginIcon />}> Sign In / Sign Up </Button>
                                </Link>
                            )
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;