import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { SignupWrapperDiv } from '../../styled/userAuthStyles';
import { LoaderDiv } from '../../styled/Loader';
import logo from '../../logo.png';
import { connect } from 'react-redux';
import { signUp } from '../../actions';

class Register extends Component {
   state = {
      unmatch: false
   };

   firstnameRef = React.createRef();
   lastnameRef = React.createRef();
   emailRef = React.createRef();
   confirmemailRef = React.createRef();
   passwordRef = React.createRef();

   onSubmit = event => {
      event.preventDefault();
      const newUser = {
         firstName: this.firstnameRef.current.value,
         lastName: this.lastnameRef.current.value,
         email: this.emailRef.current.value,
         password: this.passwordRef.current.value
      }
      if (newUser.email !== this.confirmemailRef.current.value) {
         this.setState(state => ({ ...state, unmatch: true }));
      } else {
         this.setState(state => ({ ...state, unmatch: false }));
         // invoke the signUp action creator
         this.props.signUp(newUser)
         .then(() => {
         alert('Account successfully created. You can now login')
         this.props.history.push("/login")
         })
      }
   }

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
                     this.props.requesting
                        ?
                        <LoaderDiv><div></div><div></div><div></div><div></div></LoaderDiv>
                        :
                        null
                  }
                  <form onSubmit={this.onSubmit}>
                     <div>
                        <label>First name</label>
                        <input
                           autoComplete="username"
                           required
                           type="text"
                           placeholder="James"
                           ref={this.firstnameRef}
                        />
                     </div>
                     <div>
                        <label>Last name</label>
                        <input
                           autoComplete="username"
                           required
                           type="text"
                           placeholder="Doe"
                           ref={this.lastnameRef}
                        />
                     </div>
                     <div>
                        <label>Email Address</label>
                        <input
                           autoComplete="username"
                           required
                           type="email"
                           placeholder="jamesdoe72@email.com"
                           ref={this.emailRef}
                        />
                     </div>
                     <div>
                        <label>Confirm Email Address</label>
                        <input
                           autoComplete="username"
                           required
                           type="email"
                           placeholder="jamesdoe72@email.com"
                           ref={this.confirmemailRef}
                        />
                        {
                           this.state.unmatch
                              ?
                              <p>Email addresses do not match</p>
                              :
                              null
                        }
                     </div>
                     <div>
                        <label>Choose a password</label>
                        <input
                           autoComplete="new-password"
                           required
                           type="password"
                           ref={this.passwordRef}
                        />
                     </div>
                     <div>
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

const mapStateToProps = state => {
   return {
      requesting: state.authReducer.requesting,
      error: state.authReducer.error
   }
}

export default connect(mapStateToProps, { signUp })(Register);