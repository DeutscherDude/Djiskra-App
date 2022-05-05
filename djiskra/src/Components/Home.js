import React, { Component } from "react";
import { Helmet } from "react-helmet";
import '../css/home.css';


class Home extends Component{
    render(){
        return ( 
            <div>Hello Mom!
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="centered_button"></div>
            </div>
        );
    }
}
 
export default Home;