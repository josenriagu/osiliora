import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { SignupWrapperDiv } from '../../styled/userAuthStyles';
import { LoaderDiv } from '../../styled/Loader';
import logo from '../../logo.png'

export default class Register extends Component {
   firstnameRef = React.createRef();
   lastnameRef = React.createRef();
   emailRef = React.createRef();
   confirmemailRef = React.createRef();
   passwordRef = React.createRef();
   render() {
      return (
         <>
            <Header />
            <SignupWrapperDiv>
               <section>
                  <div>
                     <img src={logo} className="app-logo" alt="logo" />
                  </div>
                  <h2>Welcome To I'll Serve Soup</h2>
                  <p>Make soup kitchen management easier for you by using the world’s most accessible and intuitive software. I’ll Serve Soup is built to be used by people of all technical skill levels, without compromising on its core features like:</p>
                  <span><ul>
                     <li>Easy management</li>
                     <li>100% inventory control</li>
                     <li>World’s most accessible software</li>
                  </ul></span>
               </section>
               <section>
                  <h3>Create an account</h3>
                  {/* Loader for Promise events */}
                  {
                     1 > 0
                        ?
                        <LoaderDiv><div></div><div></div><div></div><div></div></LoaderDiv>
                        :
                        null
                  }
                  <form onSubmit={""}>
                     <div>
                        <label>First name</label>
                        <input
                           autoComplete="username"
                           required
                           type="text"
                           placeholder="James"
                           ref={''}
                        />
                     </div>
                     <div>
                        <label>Last name</label>
                        <input
                           autoComplete="username"
                           required
                           type="text"
                           placeholder="Doe"
                           ref={''}
                        />
                     </div>
                     <div className="field">
                        <label>Email Address</label>
                        <input
                           autoComplete="username"
                           required
                           type="emailfield"
                           placeholder="jamesdoe72@email.com"
                           ref={''}
                        />
                     </div>
                     <div className="field">
                        <label>Confirm Email Address</label>
                        <input
                           autoComplete="username"
                           required
                           type="emailfield"
                           placeholder="jamesdoe72@email.com"
                           ref={''}
                        />
                     </div>
                     <div className="field">
                        <label>Choose a password</label>
                        <input
                           autoComplete="new-password"
                           required
                           type="password"
                           ref={''}
                        />
                     </div>
                     <div className="form-footer">
                        <p>By creating an account, you agree to our <Link to="/terms-and-conditions">Terms and Conditions</Link> & <Link to="/privacy-policy">Privacy Policy</Link></p>
                        <button
                           type="submit"
                        >Join Now</button>
                        <p>Already have an account? <Link to="/login">Sign In</Link></p>
                     </div>
                  </form>
               </section>
            </SignupWrapperDiv>
         </>
      );
   }
}