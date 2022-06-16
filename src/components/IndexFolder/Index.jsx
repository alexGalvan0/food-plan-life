import React from "react";
import './homePage.css';
import Signup from '../SignupFolder/Signup';



function Index(){

    return(
        <div className="homepage-container">
            <h2 className="welcome">WELCOME TO FOODPLAN.LIFE</h2>
            <div className="signup-container">
                <Signup className="signup"/>
            </div>
        </div>
    )
}
export default Index