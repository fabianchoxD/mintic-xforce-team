import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import {Link} from "react-router-dom";

/* CSS */
import '../styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar className="appBar" position="static">
                <Toolbar>
                    <Link to="/home" style={{textDecoration: 'none'}}>
                        <Avatar onClick="" alt="Bag" src="https://i.pinimg.com/736x/23/f7/c4/23f7c4409cb3b22e3e77f71ee7fefc9a.jpg"/>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> </Typography>
                    {(window.location.pathname ===  '/Login' || window.location.pathname ===  '/login')  ? (
                        null
                    ) : (
                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <Button id="btn" onClick="" endIcon={<LoginIcon/>}> Sign In / Sign Up </Button>
                        </Link>
                    )} 
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;