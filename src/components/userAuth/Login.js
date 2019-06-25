import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { LoginWrapperDiv } from '../../styled/userAuthStyles';
import { LoaderDiv } from '../../styled/Loader';
import { connect } from 'react-redux';
import { login } from '../../actions';

class Login extends Component {

   emailRef = React.createRef();
   passwordRef = React.createRef();

   onSubmit = event => {
      event.preventDefault();
      const user = {
         email: this.emailRef.current.value,
         password: this.passwordRef.current.value
      }
      // invoke the login action creator
      this.props.login(user)
      .then(res => {
         this.props.history.push("/");
         window.location.reload();
      })
   }
   render() {
      return (
         <>
            <Header />
            <LoginWrapperDiv>
               <section>
                  <h2>Welcome Back</h2>
                  <h4>Sign in to your account</h4>
               </section>
               <section>
                  {/* Loader for Promise events */}
                  {
                     this.props.requesting
                        ?
                        <LoaderDiv><div></div><div></div><div></div><div></div></LoaderDiv>
                        :
                        null
                  }
                  <form onSubmit={this.onSubmit}>
                     <div className="field">
                        <label>Email Address</label>
                        <input
                           autoComplete="username"
                           required
                           type="email"
                           placeholder="jamesdoe72@email.com"
                           ref={this.emailRef}
                        />
                        <div className="field">
                           <label>Password</label>
                           <input
                              autoComplete="current-password"
                              required
                              type="password"
                              ref={this.passwordRef}
                           />
                        </div>
                        <div className="form-footer">
                           <button
                              type="submit"
                           >Login</button>
                           <p>Don't have an account yet? <Link to="/register">Join Now</Link></p>
                        </div>
                     </div>
                  </form>
               </section>
            </LoginWrapperDiv>
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

export default connect(mapStateToProps, { login })(Login);