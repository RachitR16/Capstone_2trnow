import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home(){
    return (
        <div className="Bg">
            <div className="left_sec">
                <h1 className="intro">One on One Tutorial Session 24hrs a day</h1>
            </div>

            <div className="right_sec">
                <div className="buttons">
                    <ul>
                        <Link to="/student" style={{ textDecoration: 'none', color: 'black' }}>
                            <li className="student">Student</li>
                        </Link>
                        <Link to="/tutor" style={{ textDecoration: 'none', color: 'black' }}>
                            <li className="tutor">Tutor</li> 
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

export default Home;