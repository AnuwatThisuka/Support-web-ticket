import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Formlogin() {
   return (
      <Loginpage>
         <div className="login-page">
            <div className="form-login">
               <h1>Login</h1>
               <form className="form-input">
                  <div className="user-input">
                     <label htmlFor="" className="label-input">
                        Username or E-mail
                     </label>
                     <input
                        type="text"
                        className="input-form"
                        placeholder="Username or E-mail"
                     />
                  </div>
                  <div className="password-inut">
                     <label htmlFor="" className="label-input">
                        Password
                     </label>
                     <input
                        type="password"
                        className="input-form"
                        placeholder="Password"
                     />
                  </div>
                  <button type="submit" className="btn-login">
                     Login
                  </button>
               </form>
               <p>or</p>
               <div className="Register">
                  <li className="Register-link">
                     <Link to="/register" className="link">
                        Register
                     </Link>
                  </li>
               </div>
            </div>
         </div>
      </Loginpage>
   );
}

export default Formlogin;

const Loginpage = styled.div`
   .login-page {
      height: 100vh;
      width: 100vw;
      background-color: #333441;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .form-login {
      width: 682px;
      height: 535px;
      background-color: #383a47;
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      align-items: center;
      justify-content: center;
   }
   .form-login h1 {
      font-size: 48px;
      color: #fff;
      font-weight: 500;
      margin-bottom: 20px;
   }
   .form-login p {
      font-size: 12px;
      color: #606271;
      letter-spacing: 0.25px;
      margin-top: 20px;
   }
   .form-input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
   .user-input {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
   }
   .password-inut {
      display: flex;
      flex-direction: column;
   }
   .label-input {
      color: #ffffff;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 10px;
      letter-spacing: 0.1px;
   }
   .input-form {
      height: 48px;
      width: 27.938rem;
      border-radius: 4px;
      background-color: #424454;
      border: none;
      color: #9294a2;
      font-size: 14px;
      letter-spacing: 0.25px;
      padding: 0 10px;
   }
   .btn-login {
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 121px;
      height: 39px;
      border-radius: 10px;
      border: none;
      box-shadow: none;
      background-image: linear-gradient(#5a68e7, #2336da);
      color: #fff;
      letter-spacing: 0.25px;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
   }
   .Register {
      font-size: 14px;
      letter-spacing: 0.25px;
      margin-top: 20px;
   }
   .Register-link {
      list-style-type: none;
   }
   .link {
      text-decoration: none;
      color: #fff;
   }
`;
