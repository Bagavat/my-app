import './Register.css'
import profile from "./a.png";
import email from "./email.jpg";
import pass from "./pass.png";
import Navbar from "./Navbar";
import React from 'react';

function Register(){
  
    return(
        <React.Fragment>
        <Navbar></Navbar>
        <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile"/>
   
              </div>
   
   
            </div>
            <div>
              <h1>Register Page</h1>
              <div>
                <img src={email} alt="email" className="email"/>
                <input type="text" placeholder="user name" className="name"/>
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email"/>
                <input type="password" placeholder="Password" className="name"/>
              </div>
              <div className="third-input">
                <img src={pass} alt="pass" className="email"/>
                <input type="password" placeholder="Confirm Password" className="name"/>
              </div>
             <div className="login-button">
             <button>Register</button>
             </div>
              

    
            </div>
          </div>
          
   
        </div>
       </div></React.Fragment>
         
 );
    }
Register()
    
export default Register;