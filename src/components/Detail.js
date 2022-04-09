import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Iconsprint from "../assets/icons/printer.svg";
import Iconsback from "../assets/icons/arrow-left.svg";
import Iconsdelete from "../assets/icons/trash.svg";
import Iconsimage from "../assets/icons/1.jpg";
import { Scrollbars } from "react-custom-scrollbars";

function Detail() {
   return (
      <DetailContainer>
         <Scrollbars style={{ width: "100%", height: "100%" }}>
            <div className="date-sent-ticket">Detail</div>
            <div className="main-section-detail">
               <div className="detail-user-sent-ticket">
                  <div className="profile-user-sent"></div>
                  <div className="section-sent-user">
                     <div className="user">Anuwat Thisuka</div>
                     <div className="user-team">
                        <h2>Sent to:</h2>
                        <div className="team-color">M</div>
                        <p>Maintenance Team</p>
                        <div className="team-all"></div>
                     </div>
                  </div>
               </div>
               <div className="icons-utility">
                  <div className="icons-utility-item">
                     <li>
                        <Link to="/print">
                           <img
                              src={Iconsprint}
                              alt=""
                              className="Icons-size"
                           />
                        </Link>
                     </li>
                     <li>
                        <Link to="/print">
                           <img src={Iconsback} alt="" className="Icons-size" />
                        </Link>
                     </li>
                     <li>
                        <Link to="/print">
                           <img
                              src={Iconsdelete}
                              alt=""
                              className="Icons-size"
                           />
                        </Link>
                     </li>
                  </div>
               </div>
            </div>
            <div className="hr">
               <hr className="hr-tag" />
            </div>
            <div className="sections-title">
               <div className="main-title">
                  <p>Title Ticket : Machine ERROR</p>
               </div>
               <div className="date-time-sent-user">
                  <p>January 24, 2022 3:30 PM</p>
               </div>
            </div>
            <div className="table">
               <table className="content-table">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Date&time</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className="maintenance-confirm-ticket">
                           <p>Anuwat Thisuka</p>
                        </td>
                        <td>Maintenance</td>
                        <td className="status-ticket-user">
                           <div>
                              <div className="status-ticket"></div>
                           </div>
                           Success
                        </td>
                        <td>January 24, 12.34 PM</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div className="hr">
               <hr className="hr-tag" />
            </div>
            <div className="sections-main-detail-ticket-user">
               <div className="form-column-1">
                  <div className="input-form-detail-flname">
                     <label htmlFor="" className="label-form">
                        Firstname
                     </label>
                     <input
                        type="text"
                        placeholder="FirstName"
                        className="input-form-detail"
                     />
                  </div>
                  <div className="input-form-detail-flname">
                     <label htmlFor="" className="label-form">
                        Lastname
                     </label>
                     <input
                        type="text"
                        placeholder="Lastname"
                        className="input-form-detail"
                     />
                  </div>
               </div>
               <div className="form-column-2">
                  <div className="input-form-detail-flname">
                     <label htmlFor="" className="label-form">
                        Date&Time
                     </label>
                     <input
                        type="text"
                        placeholder="Date&Time"
                        className="input-form-detail"
                     />
                  </div>
                  <div className="input-form-detail-flname">
                     <label htmlFor="" className="label-form">
                        ID Number
                     </label>
                     <input
                        type="text"
                        placeholder="ID Number"
                        className="input-form-detail"
                     />
                  </div>
               </div>
               <div className="form-column-3">
                  <div className="input-form-detail-flname">
                     <label htmlFor="" className="label-form">
                        Locations
                     </label>
                     <input
                        type="text"
                        placeholder="Locations"
                        className="input-form-detail"
                     />
                  </div>
                  <div className="input-form-detail-flname">
                     <label htmlFor="" className="label-form">
                        Equiments
                     </label>
                     <input
                        type="text"
                        placeholder="Equiments"
                        className="input-form-detail"
                     />
                  </div>
               </div>
               <div className="form-column-4">
                  <div className="detail">
                     <label htmlFor="" className="label-form">
                        Detail
                     </label>
                     <textarea className="detail-1"></textarea>
                  </div>
                  <div className="block-image">
                     <img src={Iconsimage} alt="" className="image-size" />
                  </div>
               </div>
            </div>
         </Scrollbars>
      </DetailContainer>
   );
}

export default Detail;

const DetailContainer = styled.div`
   width: 55vw;
   height: 86vh;
   background-color: #383a47;

   .main-section-detail {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
   }
   .date-sent-ticket {
      font-size: 14px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.25rem;
      margin-bottom: 30px;
      font-weight: 400;
      letter-spacing: 0.25px;
   }
   .profile-user-sent {
      width: 48px;
      height: 48px;
      border-radius: 18px;
      background-image: linear-gradient(#5a68e7, #2336da);
      margin-right: 20px;
   }
   .detail-user-sent-ticket {
      width: 420px;
      height: 56px;
      display: flex;
      align-items: center;
      margin-left: 60px;
   }
   .section-sent-user {
      width: 360px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
   }
   .user-team {
      display: flex;
      justify-content: flex-start;
      align-items: center;
   }
   .user {
      font-size: 14px;
      color: #fff;
      font-weight: 500;
      letter-spacing: 0.2px;
   }
   .user-team h2 {
      font-size: 13px;
      color: #9597a1;
      font-weight: 400;
   }
   .user-team p {
      font-size: 14px;
      color: #fff;
      font-weight: 300;
   }
   .team-color {
      width: 26px;
      height: 26px;
      background-color: #c4c4c4;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      color: #fff;
      background-color: #bd271e;
      border: #ebecef solid 1px;
      margin-left: 10px;
      margin-right: 10px;
   }
   .icons-utility-item {
      width: 90px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .icons-utility-item li {
      list-style-type: none;
   }
   .icons-utility {
      display: flex;
      margin-right: 60px;
      align-items: center;
   }
   .hr {
      margin-top: 30px;
      display: flex;
      justify-content: center;
   }
   .hr-tag {
      width: 95%;
      background-color: #5a5c6c;
      height: 2px;
      border: none;
   }
   .sections-title {
      display: flex;
      margin-left: 60px;
      margin-top: 20px;
      justify-content: space-between;
      align-items: center;
      margin-right: 60px;
      margin-bottom: 20px;
   }
   .main-title {
   }
   .main-title p {
      font-size: 24px;
      font-weight: 500;
      color: #fff;
      letter-spacing: 0.25px;
   }
   .date-time-sent-user p {
      font-size: 12px;
      color: #fff;
      font-weight: 400;
      letter-spacing: 0.25px;
   }
   .content-table {
      border-collapse: collapse;
      width: 100%;
      font-size: 12px;
   }

   .content-table thead tr {
      background-color: #4f5163;
      color: #ffffff;
      text-align: left;
      font-weight: 500;
   }

   .content-table thead tr th {
      padding: 12px 15px;
      color: #ffffff;
      font-size: 12px;
      font-weight: 400;
   }
   .content-table td {
      padding: 12px 15px;
      color: #ffffff;
      font-size: 12px;
      font-weight: 300;
   }

   .content-table tbody tr {
      border-bottom: 1px solid #dddddd;
   }

   .content-table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
   }

   .content-table tbody tr:last-of-type {
      border-bottom: 2px solid #5a5c6c;
   }
   .table {
      margin-left: 60px;
      margin-right: 60px;
   }
   .status-ticket-user {
      display: flex;
      align-items: center;
   }
   .status-ticket {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #017d73;
      margin-right: 10px;
   }
   .maintenance-confirm-ticket p {
      color: #018dec;
      cursor: pointer;
   }
   .sections-main-detail-ticket-user {
      margin-top: 1.25rem;
      margin-right: 3.75rem;
      margin-left: 3.75rem;
      height: 40vh;
   }
   .form-column-1 {
      display: flex;
      justify-content: space-between;
   }
   .form-column-2 {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
   }
   .form-column-3 {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
   }
   .form-column-4 {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
   }
   .input-form-detail-flname {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      margin-right: 10px;
   }
   .label-form {
      color: #ffffff;
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 10px;
      letter-spacing: 0.1px;
   }
   .input-form-detail {
      height: 2.5rem;
      width: 16rem;
      border-radius: 4px;
      background-color: #424454;
      border: none;
      color: #9294a2;
      font-size: 14px;
      letter-spacing: 0.25px;
      padding: 0 10px;
   }
   .Icons-size {
      width: 18px;
      height: auto;
   }
   .detail {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
   }
   .detail-1 {
      height: 10rem;
      width: 16rem;
      border-radius: 4px;
      border: none;
      background-color: #424454;
      color: #9294a2;
      font-size: 14px;
      letter-spacing: 0.25px;
      padding: 10px 10px;
   }
   .block-image {
      width: 16rem;
      height: auto;
      margin-right: 10px;
   }
   .block-image img {
      width: 100%;
      height: auto;
      border-radius: 4px;
      object-fit: cover;
      transition: 0.1s linear;
   }
   .block-image:hover img {
      transform: scale(1.1);
   }
`;
