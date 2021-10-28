import React, { Component } from "react";
import Header from './Header';
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import Button from '@mui/material/Button';
import { lackOfPrivilegeHome, lackOfPrivilegePending } from "../miscellaneous/loginMessageHandler";
import { Link } from "react-router-dom";
import axios from 'axios';

import '../styles/SellerHome.css'

class SellerHome extends Component {

    state = {
        role: '',
    }

    componentDidMount() {
        if (sessionStorage.getItem("token") !== null) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/afterLogin`, {
                headers: {
                    'token': sessionStorage.getItem('token')
                }
            })
                .then(res => {
                    this.setState({ role: res.data.role })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    render() {
        if (sessionStorage.getItem('token') === null) {
            return (
                lackOfPrivilegeHome(),
                null)
        } else if (this.state.role === "Pending" || sessionStorage.getItem('token') === null) {
            return (
                lackOfPrivilegePending(),
                null
            )
        } else
            return (
                <Container className="fluid" fluid >
                    <Row>
                        <Header />
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="mainTittleH1"> Seller's page </h1>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <p className="mainTittleP">
                                Hello dear seller, please find below links to Sales and products.
                            </p>
                        </Col>
                    </Row>
                    <Row className="buttonDivContainer">
                        <Col>
                            <Link to="/sales" style={{ textDecoration: "none" }}>
                                <Button variant="contained" size="large">
                                    Sales
                                </Button>
                            </Link>
                            {"  "}
                            <Link to="/products" style={{ textDecoration: "none" }}>
                                <Button variant="contained" size="large">
                                    Products
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row mb-5>
                        <Footer />
                    </Row>
                </Container>
            )
    }
}
export default SellerHome;