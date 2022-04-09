import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Ticket from "./Ticket";
import styled from "styled-components";
import Detail from "./Detail";
import Newticket from "./Newticket";

function Home() {
   return (
      <Container>
         <Sidebar />
         <div className="layout-main">
            <Header />
            <div className="layout-detail-ticket">
               <Ticket />
               <div className="layout-detail-ticket-all">
                  <Detail />
                  <div className="layout-newticket">
                     <Newticket />
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
}

export default Home;

const Container = styled.div`
   display: flex;
   flex-direction: row;
   background-color: #333441;

   .layout-main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }
   .layout-detail-ticket {
      display: flex;
      justify-content: space-between;
   }
   .layout-detail-ticket-all {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
   }
   .layout-newticket {
      display: flex;
      margin-bottom: 20px;
      position: absolute;
   }
`;
