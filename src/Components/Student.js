import React, {useState} from 'react';
import './Student.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement("#root")

function Student(){

    const[modalIsOpen, setModalIsOpen] = useState(false)

    const[modalIsOpen_r, setModalIsOpen_r] = useState(false)


    

    return (
        <div className="Bg">
            <div className="left_sec">
                <h1 className="intro">One on One Tutorial Session 24hrs a day</h1>
            </div>

            <div className="right_sec">
                <div className="title">
                    <h1>STUDENT PORTAL</h1>
                </div>

                <div className="student_buttons">
                    <ul>
                        <Link to onClick = {() => setModalIsOpen(true)} style={{ textDecoration: 'none', color: 'rgb(255, 213, 139)' }}>
                            <li className="login">Login</li>
                        </Link>
                        <Link to onClick = {() => setModalIsOpen_r(true)} style={{ textDecoration: 'none', color: 'rgb(255, 213, 139)' }}>
                            <li className="register">Register</li> 
                        </Link>
                    </ul>
                </div>

                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                    style={
                        {
                            overlay:{backgroundColor:'rgba(0,0,0,.7)'},
                            content:{backgroundColor:'rgb(32, 32, 32)', opacity:'1', width:'800px', marginLeft: 'auto', marginRight:'auto'},
                            }}>

                    <form className="form" method="POST">
                        <h1>Student Login</h1>
                        <input type="text" className="userInfo" name="username" placeholder="Email" required/>
                        <input type="text" className="userInfo" name="Password" placeholder="Password" required/>
                        <button className="enter">Enter</button>
                    </form>                    
                </Modal>

                <Modal isOpen={modalIsOpen_r} onRequestClose={() => setModalIsOpen_r(false)}
                    style={
                        {
                            overlay:{backgroundColor:'rgba(0,0,0,.7)'},
                            content:{backgroundColor:'rgb(32, 32, 32)', opacity:'1', width:'800px', marginLeft: 'auto', marginRight:'auto'},
                            }}>
                            
                    <form className="r_form" method="POST">
                        <h1>Student Registration</h1>
                        <input type="text" className="userInfo" name="fullName" placeholder="Full Name" required/>
                        <input type="text" className="userInfo" name="password" placeholder="Password" required/>
                        <input type="text" className="userInfo" name="location" placeholder="Location" required/>
                        <input type="text" className="userInfo" name="email" placeholder="Email" required/>
                        <input type="text" className="userInfo" name="dob" placeholder="Date of Birth" required/>
                        <input type="text" className="userInfo" name="program" placeholder="School Program" required/>
                        <button className="enter">Register</button>
                    </form>                    
                </Modal>
                
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

export default Student;