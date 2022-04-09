import React from "react";
import Iconsdraganddrob from "../assets/icons/Plus.svg";
import styled from "styled-components";

const Draganddrob = () => {
   const dragOver = (e) => {
      e.preventDefault();
   };
   const dragEnter = (e) => {
      e.preventDefault();
   };
   const dragLeave = (e) => {
      e.preventDefault();
   };

   const filedrop = (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files[0];
      console.log(files);
   };

   return (
      <DraganddrobContainer
         className="drag-and-drob"
         onDragOver={dragOver}
         onDragEnter={dragEnter}
         onDragLeave={dragLeave}
         onDrop={filedrop}
      >
         <form action="" className="form-drag">
            <button className="icons-drag-and-drob">
               <img src={Iconsdraganddrob} alt="" />
            </button>
            <h2>Upload Picture For Profile</h2>
            <h3>Drag and drop your picture or click to select</h3>
         </form>
      </DraganddrobContainer>
   );
};

export default Draganddrob;

const DraganddrobContainer = styled.div`
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
      border: none;
      cursor: pointer;
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
   .form-drag {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
`;
