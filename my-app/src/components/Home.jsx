import React from "react";
import Header from './Header';
import Footer from "./Footer";

import '../styles/Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <Header/>

            <div className="body">
                <h1> Let's Go! </h1>
                <p> 
                    This is a web application for the sale of electronic products, 
                    with crazy promotions and discounts. Enter now, and enjoy all the 
                    products we have for you. To register you only need to have a Gmail account, 
                    wait for the user permissions to be granted by the administrator, and that's it. 
                    You're welcome!
                </p>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Home;