import React, { Component } from "react";
import Header from './Header';
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { lackOfPrivilegeSeller } from "../miscellaneous/loginMessageHandler";

import '../styles/SellerHome.css'

class PendingHome extends Component{
    render() {
        if (window.sessionStorage.getItem('role') === "Seller"){
            return (
                lackOfPrivilegeSeller(),
                null
            )
        }else
    return (
            <Container className="fluid" fluid >
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <Col>
                        <h1 className="mainTittleH1"> Waiting page </h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <p className="mainTittleP">
                            A web admin we will grant you access soon to this amazing web. Then you can go and buy awesome products.
                        </p>
                    </Col>
                </Row>
                <Row mb-5>
                    <Footer/>
                </Row>
            </Container>
    )}
}
export default PendingHome;