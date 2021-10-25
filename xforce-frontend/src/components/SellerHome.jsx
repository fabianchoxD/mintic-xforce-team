import React, { Component } from "react";
import Header from './Header';
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import Button from '@mui/material/Button';
import { lackOfPrivilegePending } from "../miscellaneous/loginMessageHandler";
import { Link } from "react-router-dom";

import '../styles/SellerHome.css'

class SellerHome extends Component {
    render() {
        if (window.sessionStorage.getItem('role') === "Pending") {
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