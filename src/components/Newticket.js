import React from "react";
import styled from "styled-components";
import Iconsnew from "../assets/icons/Send.svg";

function Newticket() {
   return (
      <NewticketContainer>
         <div className="main-container-new">
            <button className="btn-new">
               <img src={Iconsnew} alt="" /> New Ticket
            </button>
         </div>
      </NewticketContainer>
   );
}

export default Newticket;

const NewticketContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   width: 50vw;
   .btn-new {
      background-image: linear-gradient(#5a68e7, #2336da);
      width: 120px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.25px;
      color: #fff;
   }
   .btn-new img {
      margin-right: 6px;
   }
`;
