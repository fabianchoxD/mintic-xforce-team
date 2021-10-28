import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import axios from 'axios';
import { logoutMessage } from "../miscellaneous/loginMessageHandler";

/* CSS */
import "../styles/Header.css";

class Header extends React.Component {

    state = {
        role: '',
        showButtons: false
    }

    logout = response => {
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('role');
        logoutMessage();

    }

    componentDidMount() {
        if (sessionStorage.getItem("token") !== null) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/afterLogin`, {
                headers: {
                    'token': sessionStorage.getItem('token')
                }
            })
            .then(res => {
                this.setState({role: res.data.role})
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    render() {
        return (
            <AppBar className="appBar" position="fixed" elevation={4}>
                <Toolbar>
                    <Link to="/home" style={{ textDecoration: "none", display: "flex" }}>
                        <Avatar
                            alt="Bag"
                            src="https://i.pinimg.com/736x/23/f7/c4/23f7c4409cb3b22e3e77f71ee7fefc9a.jpg"
                        />
                        <Typography
                            style={{
                                fontFamily: "Montserrat, sans-serif",
                                color: "white",
                                marginTop: "3px",
                            }}
                            variant="h6"
                            sx={{ flexGrow: 1 }}
                        >
                            &nbsp; Megasales
                        </Typography>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {" "}
                    </Typography>
                    
                    {this.state.role === 'Administrator' ? (
                        <div>
                            <Link to="/sales">
                                <Tooltip title="Sales" style={{marginRight: '5px'}} arrow>
                                    <IconButton sx={{ color: 'white'}}>
                                        <MonetizationOnOutlinedIcon sx={{ fontSize: 25 }}/>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link to="/products">
                                <Tooltip title="Products" style={{marginRight: '5px'}} arrow>
                                    <IconButton sx={{ color: 'white'}}>
                                        <ShoppingCartIcon sx={{ fontSize: 25 }}/>
                                    </IconButton>
                                </Tooltip>
                            </Link> 
                            <Link to="/users">
                                <Tooltip title="Users" style={{marginRight: '30px'}} arrow>
                                    <IconButton sx={{ color: 'white'}}>
                                        <PeopleAltRoundedIcon sx={{ fontSize: 25 }}/>
                                    </IconButton>
                                </Tooltip>
                            </Link> 
                        </div>
                    ) : this.state.role === 'Seller' ? (
                        <div>
                            <Link to="/sales">
                                <Tooltip title="Sales" style={{marginRight: '5px'}} arrow>
                                    <IconButton sx={{ color: 'white'}}>
                                        <MonetizationOnOutlinedIcon sx={{ fontSize: 25 }}/>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Link to="/products">
                                <Tooltip title="Products" style={{marginRight: '30px'}} arrow>
                                    <IconButton sx={{ color: 'white'}}>
                                        <ShoppingCartIcon sx={{ fontSize: 25 }}/>
                                    </IconButton>
                                </Tooltip>
                            </Link> 
                        </div>
                    ) : (
                        null
                    )}

                    {sessionStorage.getItem('token') != null ? (
                        <Button id="btn" onClick={this.logout} endIcon={<CancelIcon />}>
                            {" "}
                            Logout{" "}
                        </Button>
                    ) : (
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <Button id="btn" onClick="" endIcon={<LoginIcon />}>
                                {" "}
                                Sign In / Sign Up{" "}
                            </Button>
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
};

export default Header;