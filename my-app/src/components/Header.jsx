import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
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
                    <Avatar alt="Bag" src="https://i.pinimg.com/736x/23/f7/c4/23f7c4409cb3b22e3e77f71ee7fefc9a.jpg"/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> </Typography>
                    
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <Button id="btn" onClick=""> Sign In / Sign Up </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;