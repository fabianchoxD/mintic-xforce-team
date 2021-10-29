import React from 'react';
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import '../styles/Footer.css';

const Footer = () => {
    return (
        <Row className="footer fixed-bottom">
            <Col />
            <Col>
                <Link to={{ pathname: "https://www.misiontic2022.gov.co/portal/" }} target="_blank">
                    <img src="img/logo_mision.png" id="img1" width="20%" alt="misonTic"/>
                </Link>
                <Link to={{ pathname: "https://www.udea.edu.co/" }} target="_blank">
                    <img src="img/udea_ingenia.png" id="img2" width="50%" alt="udea"/>
                </Link>
            </Col>
            <Col />
        </Row>
    )
}

export default Footer;