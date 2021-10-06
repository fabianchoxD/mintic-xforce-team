import React from "react";
import Header from './Header';
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

import '../styles/Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <Container className="fluid" fluid >
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/Banner1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/Banner2.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/Banner3.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <Col>
                        <h1 className="mainTittleH1"> Let's Go! </h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <p className="mainTittleP">
                            This is a web application for the sale of electronic products,
                            with crazy promotions and discounts. Enter now, and enjoy all the
                            products we have for you. To register you only need to have a Gmail account,
                            wait for the user permissions to be granted by the administrator, and that's it.
                            You're welcome!
                        </p>
                    </Col>
                </Row>
                <div>
                </div>
                <Row mb-5>
                    <Footer />
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default Home;