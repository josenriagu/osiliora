import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
     opacity: 0;
  }
  25% {
     opacity: 0.25;
  }
  50% {
     opacity: 0.5;
  }
  75% {
     opacity: 0.75;
  }
  100% {
     opacity: 1;
  }
`;
export const LoaderDiv = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: rgba(255, 255, 255, .9);
   position: fixed;
   z-index: 9999;
   div:nth-of-type(1) {
      position: relative;
      top: 45%;
      left: 45%;
   }
`;
export const HeaderStyle = styled.header`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
   background-color: #ffffff;
   border-bottom: .1rem solid #b0b0b0;
   padding: 1.6rem;
   transition: box-shadow 1s;
   position: sticky;
   top: 0;
   z-index: 9999;
   @media (max-width: 500px) {
   /* rules to make the header sticky */
   position: sticky;
   top: 0;
   z-index: 9999;
   }
   :hover {
      box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   }
   a {
      text-decoration: none;
   }
   h2 {
      margin: 0;
   }
   div:nth-of-type(1) {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 500px) {
         width: 100%;
      }
      div {
         display:none;
         width: fit-content;
         @media (max-width: 500px) {
            display: flex;
         }
      }
   }
   div:nth-of-type(2) {
      width: 20%;
      margin-right: 3rem;
      justify-content: space-between;
      @media (max-width: 500px) {
         display: none;
         width: 100%;
      }
      a {
         font-size: 1.6rem;
         color: black;
         margin-left: 2rem;
         border-radius: .5rem;
         border: .1rem solid #e5e5e5;
         padding: .8rem;
      }
   }
   section {
      display: none;
      @media (max-width: 500px) {
         display: flex;
         flex-direction: column;
         width: 100%;
         margin-top: 1rem;
      }
      a {
         font-size: 1.6rem;
         color: black;
         border-bottom: .1rem solid #e5e5e5;
         padding: 1.5rem;
         text-align: center;
      }
   }
   button {
      margin: 0;
      padding: .8rem;
      @media (max-width: 500px) {
         display:none;
         margin: 1rem auto 0;
      }
   }
`;
export const HomeWrapperDiv = styled.div`
   width: 75%;
   margin: 1rem auto;
   @media (max-width: 500px) {
      width: 95%;
   }
`;
export const FilterDiv = styled.div`
   display: flex;
   width: 25%;
   justify-content: space-between;
   align-items: center;
   @media (max-width: 500px) {
      width: 100%;
   }
   select {
      margin-top: 0;
   }
   p {
      margin: 0;
   }
`;
export const InventoryDiv = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding: 2rem;
   border-radius: 1rem;
   box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   @media (max-width: 500px) {
      padding: .8rem;
   }
`;

export const InventoryItemDiv = styled.div`
   width: 23%;
   margin-bottom: 2rem;
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   border: .05rem solid #b0b0b0;
   /* make hover transforms a bit slower */
   transition: transform 1s;
   @media (max-width: 500px) {
      width: 48%;
   }
   :hover {
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
      background-color: #bdf2d5;
      box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
      h4, span {
         color: #6ea22c;
         font-weight: bold;
      }
      section:nth-of-type(3) {
         img {
            cursor: pointer;
            opacity: 1;
         }
      }
   }
   section {
      margin: 1rem;
      word-wrap: break-word;
      h4 {
         text-transform: capitalize;
         margin: 0 0 1rem;
      }
      h5 {
         font-size: 1.6rem;
         margin: 0 0 1rem;
         font-weight: 400;
      }
      p {
         margin: 0;
         font-size: 1.3rem;
         color: #3d3d3d;
         span {
            font-size: 1.3rem;
         }
      }
   }
   section:nth-of-type(1) {
      border-bottom: .1rem solid #b0b0b0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p:nth-of-type(2) {
         font-size: 1.1rem;
         font-weight: bold;
         color: red;
         animation: ${fade} 2s linear;
      }
   }
   section:nth-of-type(2) {
      margin-top: 0;
      div {
         max-width: 20.25rem;
         max-height: 20.25rem;
         margin-bottom: 1rem;
         @media (max-width: 500px) {
            max-width: 12.498rem;
            max-height: 12.498rem;
         }
         img {
            width: 100%;
            height: 100%;
         }
      }
   }
   section:nth-of-type(3) {
      width: 35%;
      margin-left: auto;
      display:flex;
      justify-content: space-between;
      img {
         opacity: 0.2;
      }
   }
`;

export const InventoryFormSection = styled.section`
   width: 40%;   
   margin: 2rem auto 0;
   text-align: center;
   display: flex;
   flex-direction: column;
   border-radius: 1rem;
   box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   @media (max-width: 500px) {
      width: 92%;
   }
   form {
      width: 70%;
      margin: 1rem auto;
      text-align: left;
      @media (max-width: 500px) {
         width: 85%;
      }
      div {
         display: flex;
         flex-direction: column;
         width: 100%;
         margin-top: 1rem;
      }
   }
`;