import React, { Component } from "react";
import Header from './Header';
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { lackOfPrivilegeHome, lackOfPrivilegeSeller } from "../miscellaneous/loginMessageHandler";
import axios from 'axios';

import '../styles/SellerHome.css'

class PendingHome extends Component {

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
        } else
            if (this.state.role === "Seller" || sessionStorage.getItem('token') === null) {
                return (
                    lackOfPrivilegeSeller(),
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
                            <Footer />
                        </Row>
                    </Container>
                )
    }
}
export default PendingHome;