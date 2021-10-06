import React from "react";
import Header from './Header';
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap"

import '../styles/Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <Container className="fluid" fluid >
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col md="auto">
                        <h1 className="mainTittleH1"> Let's Go! </h1>
                        <p className="mainTittleP">
                            This is a web application for the sale of electronic products,
                            with crazy promotions and discounts. Enter now, and enjoy all the
                            products we have for you. To register you only need to have a Gmail account,
                            wait for the user permissions to be granted by the administrator, and that's it.
                            You're welcome!
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />

        </React.Fragment>
    )
}

export default Home;