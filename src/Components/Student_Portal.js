import React, {useState} from 'react';
import './Student_Portal.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement("#root")


function Student_Portal(){

    const[modalIsOpen_hst, setModalIsOpen_hst] = useState(false)
    const[modalIsOpen_pfl, setModalIsOpen_pfl] = useState(false)



    return (
        <div className="S_Portal_Bg">

            <div className="Std_Portal_Left">
                <img className="logo" src="./images/2TR-Now.png" alt=""/>
                <h1 className="tagline">One on One Tutorial Session 24hrs a day</h1>
                <h1 className="welcome">Welcome Back</h1>
                <h1 className="std_name">John</h1>
                <div className="Std_Portal_left">
                    <ul className="stdLeft_buttons">
                        <Link to onClick= {() => setModalIsOpen_pfl(true)} style={{ textDecoration: 'none', color: 'rgb(255, 213, 139)' }}>
                            <li className="login">Edit Profile</li>
                        </Link>
                        <Link to onClick= {() => setModalIsOpen_hst(true)} style={{ textDecoration: 'none', color: 'rgb(255, 213, 139)' }}>
                            <li className="register">Past Tutoring Requests</li> 
                        </Link>
                    </ul>
                </div>
            </div>

            <div className="Std_Portal_Right">
                <h1 className="session">Session Request</h1>
                <form className="input_fields" action="">
                    <input type="text" className="user_req" name="Subject" placeholder="Subject" required/>
                    <input type="text" className="user_req" name="Issue" placeholder="Issue" required/>
                    <input type="text" className="user_req" name="Language" placeholder="Language" required/>
                    <textarea name="message" className="user_req" placeholder="Please give brief desicription" rows="3" cols="10"></textarea>
                    <textarea name="message" className="user_req" placeholder="Completed tasks" rows="2" cols="10"></textarea>
                    <input type="text" className="user_req" name="Subject" placeholder="Duration" required/>
                    <br />
                    <button className="sub_button">Submit</button>
                </form>
            </div>

            <Modal isOpen={modalIsOpen_hst} onRequestClose={() => setModalIsOpen_hst(false)}
                    style={
                        {
                            overlay:{backgroundColor:'rgba(0,0,0,.7)'},
                            content:{backgroundColor:'rgb(32, 32, 32)', opacity:'1', width:'1000px', marginLeft: 'auto', marginRight:'auto'},
                            }}>

                    <div className="edit_name">
                        <h1 className="sh">Name: John Smith</h1>


                        <div className="tables">
                            <h1 className="sh">Session Requests</h1>
                            <table>
                                <tr>
                                    <th>Date</th>
                                    <th>Subject</th>
                                    <th>Answer</th>
                                    <th>Tutor Name</th>
                                    <th>Student Rating</th>
                                    <th>Tutor Rating</th>
                                </tr>
                            </table>
                        </div>

                        <div className="tables">
                            <h1 className="sh">Session History</h1>
                            <table>
                                <tr>
                                    <th>Date</th>
                                    <th>Subject</th>
                                    <th>Answer</th>
                                    <th>Tutor Name</th>
                                    <th>Student Rating</th>
                                    <th>Tutor Rating</th>
                                </tr>
                            </table>
                        </div>

                        <div className="tables">
                            <h1 className="sh">Payment Requests</h1>
                            <table>
                                <tr>
                                    <th>Date</th>
                                    <th>Subject</th>
                                    <th>Answer</th>
                                    <th>Tutor Name</th>
                                    <th>Student Rating</th>
                                    <th>Tutor Rating</th>
                                </tr>
                            </table>
                        </div>   
                    </div>                             
            </Modal>


            <Modal isOpen={modalIsOpen_pfl} onRequestClose={() => setModalIsOpen_pfl(false)}
                    style={
                        {
                            overlay:{backgroundColor:'rgba(0,0,0,.7)'},
                            content:{backgroundColor:'rgb(32, 32, 32)', opacity:'1', width:'1000px', marginLeft: 'auto', marginRight:'auto'},
                            }}>
                    
                    <h1 className="pfl">Edit Profile</h1>
                    <hr/>
                    <div className="edit_pfl">
                        <h1>Profile Pircture</h1>
                    </div>
                    <div className="v1"></div>
                    <div className="edit_pfl1">
                        <h1>Contact Information</h1>
                        <hr/>
                        <form className="user_form">
                            <label for="fname">First name:</label>
                            <input className="form_inp" placeholder="Current First Name" type="text" id="fname" name="fname"/>
                            <br/>
                            <br/>
                            <label for="lname">Last name:</label>
                            <input className="form_inp" placeholder="Current Last Name" type="text" id="lname" name="lname"/>
                            <br/>
                            <br/>
                            <label for="email">Email:</label>
                            <input className="form_inp" placeholder="Current Email" type="text" id="email" name="email"/>
                            <br/>
                            <br/>
                            <label for="password">Password:</label>
                            <input className="form_inp" placeholder="Current Password" type="text" id="password" name="password"/>
                            <br/>
                            <br/>
                            <label for="phone">Phone:</label>
                            <input className="form_inp" placeholder="Current Phone Number" type="text" id="phone" name="phone"/>
                            <br/>
                            <br/>
                            <input type="submit" value="Save"></input>
                        </form>                        
                    </div>

                                      
            </Modal>
        </div>        
    )
}

export default Student_Portal;