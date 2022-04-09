import React from "react";
import styled from "styled-components";
import Iconsdraganddrob from "../assets/icons/Plus.svg";

function Ticket() {
   return (
      <TicketContainer>
         <div className="header-con">
            <div className="header-ticket">
               <div className="Ticket-hero">
                  <h1>Ticket</h1>
               </div>
               <div className="new-ticket">
                  <button className="icons-new-ticket" type="submit">
                     <img
                        src={Iconsdraganddrob}
                        alt=""
                        className="Icons-size"
                     />
                  </button>
               </div>
            </div>
         </div>
         <div className="select-ticket">
            <select name="ticket" id="" className="select">
               <option value="">All</option>
               <option value="">Waiting</option>
               <option value="">Pending</option>
               <option value="">Success</option>
            </select>
         </div>
      </TicketContainer>
   );
}

export default Ticket;

const TicketContainer = styled.div`
   width: 25vw;
   height: 89vh;
   background-color: #383a47;

   .header-con {
      padding-top: 20px;
      display: flex;
      justify-content: center;
   }
   .Ticket-hero {
      color: #ffff;
      font-size: 12px;
      font-weight: 200;
      letter-spacing: 0.25px;
   }
   .icons-new-ticket {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(#5a68e7, #2336da);
      border-radius: 15px;
      border: none;
      cursor: pointer;
   }
   .Icons-size {
      width: 18px;
      height: auto;
   }
   .header-ticket {
      display: flex;
      width: 100%;
      height: 40px;
      justify-content: space-between;
      align-items: center;
      margin-left: 20px;
      margin-right: 20px;
   }
   .new-ticket {
      display: flex;
      width: 50px;
      height: 40px;
      justify-content: center;
      align-items: center;
   }
   .select {
      padding: 5px;
      width: 96px;
      height: 40px;
      border-radius: 8px;
      border: none;
      font-size: 12px;
      font-weight: 400;
      background-color: #515366;
      color: #ffff;
      margin-top: 20px;
      margin-left: 20px;
   }
`;
