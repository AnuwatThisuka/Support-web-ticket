import React from "react";
import styled from "styled-components";

function pagenotfound() {
   return (
      <PagenotfoundContainer>
         <div className="main-section-notfound">
            <h5>Fuck You!</h5>
            <p>Page not found</p>
         </div>
      </PagenotfoundContainer>
   );
}

export default pagenotfound;

const PagenotfoundContainer = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #000000;
   .main-section-notfound {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
   .main-section-notfound h5 {
      font-weight: 300;
      font-size: 200px;
      color: #fff;
   }
   .main-section-notfound p {
      font-weight: 300;
      font-size: 50px;
      color: #fff;
   }
`;
