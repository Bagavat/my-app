import './Login.css'
import profile from "./a.png";
import email from "./email.jpg";
import pass from "./pass.png";
import Register from './Register';
import Navbar from "./Navbar";
import React from 'react';
function Login(){
  
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
              <h1>Login Page</h1>
              <div>
                <img src={email} alt="email" className="email"/>
                <input type="text" placeholder="user name" className="name"/>
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email"/>
                <input type="password" placeholder="user name" className="name"/>
              </div>
             <div className="login-button">
             <button>Login</button>
             </div>
              
               <p className="link">
                 <a href='./Register.js'>Forgot password ?</a> Or<a href="#">Sign Up</a>
               </p>
              
    
            </div>
          </div>
          
   
        </div>
       </div>
       </React.Fragment>
         
 );
    }

    
export default Login;