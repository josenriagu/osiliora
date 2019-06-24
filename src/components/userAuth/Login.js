import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { LoginWrapperDiv } from '../../styled/userAuthStyles';
import { LoaderDiv } from '../../styled/Loader';


export default class Login extends Component {
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
                     1 > 0
                        ?
                        <LoaderDiv><div></div><div></div><div></div><div></div></LoaderDiv>
                        :
                        null
                  }
                  <form onSubmit={""}>
                     <div className="field">
                        <label>Email Address</label>
                        <input
                           autoComplete="username"
                           required
                           type="emailfield"
                           placeholder="jamesdoe72@email.com"
                           ref={''}
                        />
                        <div className="field">
                           <label>Password</label>
                           <input
                              autoComplete="current-password"
                              required
                              type="password"
                              ref={''}
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