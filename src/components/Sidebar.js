import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Iconslogo from "../assets/icons/Icon.svg";

function Sidebar() {
   return (
      <Sidebarcss>
         <div className="logo">
            <img src={Iconslogo} alt="" />
            <h1>AS Service</h1>
         </div>
         <div className="sidebar">
            <li>
               <Link to="/dashboard" className="navlink">
                  Dashboard
               </Link>
               <Link to="/Ticket" className="navlink">
                  Ticket
               </Link>
               <Link to="/Historyticket" className="navlink">
                  History Ticket
               </Link>
               <Link to="/Setting" className="navlink">
                  Setting
               </Link>
               <Link to="/" className="navlink">
                  Logout
               </Link>
            </li>
         </div>
      </Sidebarcss>
   );
}

export default Sidebar;

const Sidebarcss = styled.div`
   width: 18vw;
   height: 100vh;
   background-color: #333441;
   display: flex;
   flex-direction: column;
   align-items: center;

   .logo {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 60px;
   }
   .logo h1 {
      color: #fff;
      letter-spacing: 0.5px;
      font-weight: 600;
   }
   .sidebar {
      display: flex;
      width: 136px;
      height: 180px;
   }
   .sidebar li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      list-style-type: none;
   }
   .navlink {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      letter-spacing: 0.2px;
      position: relative;
   }
   .navlink::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      background-color: #fff;
      bottom: -8px;
      left: 0;
      transition: 0.3s;
   }
   .navlink:hover::after {
      width: 40%;
   }
   .navlink:hover {
      color: #fff;
   }
`;
