import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Draganddrob from "../components/Draganddrob";

function Registerpage() {
   return (
      <Register>
         <div className="registerpage">
            <div className="form-register">
               <div className="form-register-inline">
                  <div className="header-register">
                     <h1>Register</h1>
                     <Draganddrob />
                  </div>
                  <div className="form-column-1">
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
                     <div className="password-input">
                        <label htmlFor="" className="label-input">
                           Password
                        </label>
                        <input
                           type="password"
                           className="input-form"
                           placeholder="Password"
                        />
                     </div>
                  </div>
                  <div className="form-column-2">
                     <div className="user-input">
                        <label htmlFor="" className="label-input">
                           ID Card
                        </label>
                        <input
                           type="text"
                           className="input-form"
                           placeholder="ID Card"
                        />
                     </div>
                     <div className="password-input">
                        <label htmlFor="" className="label-input">
                           Department
                        </label>
                        <select name="Dep" id="input-form-id">
                           <option value="">Choose Department</option>
                           <option value="">Engineer1</option>
                           <option value="">Engineer2</option>
                           <option value="">Engineer3</option>
                        </select>
                     </div>
                  </div>
                  <div className="form-column-3">
                     <div className="password-input">
                        <label htmlFor="" className="label-input-1">
                           Username or E-mail
                        </label>
                        <input
                           type="text"
                           className="input-form-1"
                           placeholder="Username or E-mail"
                        />
                     </div>
                  </div>
                  <div className="form-column-2">
                     <div className="user-input">
                        <label htmlFor="" className="label-input">
                           Password
                        </label>
                        <input
                           type="password"
                           className="input-form"
                           placeholder="Password"
                        />
                     </div>
                     <div className="password-input">
                        <label htmlFor="" className="label-input">
                           Confirm Password
                        </label>
                        <input
                           type="password"
                           className="input-form"
                           placeholder="Confirm Password"
                        />
                     </div>
                  </div>
                  <div className="btn">
                     <button type="submit" className="btn-login">
                        Register
                     </button>
                  </div>
                  <p>or</p>
                  <div className="Register">
                     <li className="Register-link">
                        <Link to="/" className="link">
                           Login
                        </Link>
                     </li>
                  </div>
               </div>
            </div>
         </div>
      </Register>
   );
}

export default Registerpage;

const Register = styled.div`
   .registerpage {
      height: 100%;
      width: 100%;
      background-color: #333441;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .form-register {
      background-color: #383a47;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px;
   }
   .form-register-inline {
      margin: 30px;
   }
   .form-register-inline p {
      font-size: 12px;
      color: #606271;
      letter-spacing: 0.25px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .header-register {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   .header-register h1 {
      color: #fff;
      font-size: 48px;
      font-weight: 500;
   }
   .drag-and-drob {
      width: 447px;
      height: 148px;
      background-color: #424454;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%238E8F98FF' stroke-width='3' stroke-dasharray='4%2c 7%2c 5%2c 9' stroke-dashoffset='23' stroke-linecap='round'/%3e%3c/svg%3e");
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
   }
   .icons-drag-and-drob {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(#5a68e7, #2336da);
      border-radius: 15px;
      margin-bottom: 10px;
   }
   .drag-and-drob h2 {
      color: #fff;
      font-size: 18px;
      letter-spacing: 0.1px;
      font-weight: 700;
      margin-bottom: 3px;
   }
   .drag-and-drob h3 {
      color: #8e8f98;
      font-size: 14px;
      letter-spacing: 0.1px;
      font-weight: 600;
   }
   .form-column-1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 30px;
   }
   .form-column-2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
   }
   .form-column-3 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
   }
   .user-input {
      display: flex;
      flex-direction: column;
   }
   .password-input {
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
      width: 340px;
      border-radius: 4px;
      background-color: #424454;
      border: none;
      color: #9294a2;
      font-size: 14px;
      letter-spacing: 0.25px;
      padding: 0 10px;
   }
   #input-form-id {
      height: 48px;
      width: 340px;
      border-radius: 4px;
      background-color: #424454;
      border: none;
      color: #9294a2;
      font-size: 14px;
      letter-spacing: 0.25px;
      padding: 0 10px;
      padding-right: 10px;
   }
   .label-input-1 {
      color: #ffffff;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 10px;
      letter-spacing: 0.1px;
   }
   .input-form-1 {
      height: 48px;
      width: 710px;
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
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .Register-link {
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .link {
      text-decoration: none;
      color: #fff;
   }
   .btn {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;
