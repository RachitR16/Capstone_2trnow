import React from 'react';
import './Tutor.css';
import { Link } from 'react-router-dom';


function Tutor(){
    return (
        <div className="Bg">
            <div className="left_sec">
                <h1 className="intro">One on One Tutorial Session 24hrs a day</h1>
            </div>

            <div className="right_sec">
                <div className="tutor_title">
                    <h1>TUTOR PORTAL</h1>
                </div>

                <div className="tutor_buttons">
                    <ul>
                        <Link to="/student" style={{ textDecoration: 'none', color: 'rgb(255, 213, 139)' }}>
                            <li className="login">Login</li>
                        </Link>
                        <Link to="/tutor" style={{ textDecoration: 'none', color: 'rgb(255, 213, 139)' }}>
                            <li className="register">Register</li> 
                        </Link>
                    </ul>
                </div>
                
                <div className="instructions">
                    <ul>
                        <li>Login to account</li>
                        <li>Send request for session (as student or tutor)</li>
                        <li>Get matchedup with a tutor/student anywhere in the world</li>
                    </ul>
                </div>
            </div>
        </div>        
    )
}

export default Tutor;