import React from "react";
import styled from "styled-components";
import Iconssearch from "../assets/icons/search.svg";
import { Link } from "react-router-dom";
import Iconsnotifications from "../assets/icons/bell.svg";
import Iconsinbox from "../assets/icons/email.svg";

function Header() {
   return (
      <Headercss>
         <div className="searchbar">
            <img src={Iconssearch} alt="" className="Icon-size" />
            <input
               type="text"
               placeholder="Search..."
               className="input-search"
            />
         </div>
         <div className="right-content">
            <div className="navlink-noti">
               <li>
                  <Link to="/notification">
                     <img
                        src={Iconsnotifications}
                        alt=""
                        className="Icons-size"
                     />
                  </Link>
                  <Link to="/Ticket">
                     <img src={Iconsinbox} alt="" className="Icons-size" />
                  </Link>
               </li>
            </div>
            <div className="profile"></div>
            <div className="username">Anuwat Thisuka</div>
         </div>
      </Headercss>
   );
}

export default Header;

const Headercss = styled.div`
   background-color: #383a47;
   width: 82vw;
   display: flex;
   height: 10vh;
   justify-content: space-between;
   align-items: center;

   .right-content {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 40px;
   }
   .searchbar {
      margin-left: 60px;
      display: flex;
      align-items: center;
   }
   .searchbar img {
      width: 24px;
      height: auto;
   }
   .input-search {
      width: 300px;
      height: 30px;
      border-radius: 5px;
      border: none;
      background-color: #383a47;
      color: #c9cad4;
      margin-left: 20px;
      padding: 5px;
   }
   .navlink-noti {
      width: 92px;
      height: 24px;
      margin-right: 40px;
   }
   .navlink-noti li {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
   }
   .Icons-size {
      width: 18px;
      height: auto;
   }
   .profile {
      width: 48px;
      height: 48px;
      border-radius: 18px;
      background-image: linear-gradient(#5a68e7, #2336da);
      margin-right: 20px;
   }
   .username {
      color: #ffff;
      font-weight: 300;
      letter-spacing: 0.2px;
      font-size: 14px;
   }
`;
