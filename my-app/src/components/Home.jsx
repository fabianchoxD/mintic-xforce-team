import React from "react";
import Header from './Header';
import Footer from "./Footer";

import '../styles/Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <Header/>

            <div className="body">
                <h1> MegaSales </h1>
                <p> This is a web application for electronic product sales management </p>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Home;