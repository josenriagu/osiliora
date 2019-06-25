import styled from 'styled-components';

export const HeaderStyle = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #ffffff;
   border-bottom: .1rem solid #b0b0b0;
   padding: 1.6rem;
   /* rules to make the header sticky */
   /* position: fixed;
   top: 0;
   width: 100%; */
   :hover {
      box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   }
   h2 {
      margin: 0;
   }
   div:nth-of-type(1) {
      width: 70%;
   }
   div:nth-of-type(2) {
      width: 20%;
      margin-right: 3rem;
      justify-content: space-between;
      a {
         font-size: 1.6rem;
         text-decoration: none;
         color: black;
         margin-left: 2rem;
      }
   }
   button {
      margin: 0;
      padding: .8rem;
   }
`;

export const HomeDiv = styled.div`
   width: 75%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 2rem auto;
   padding: 2rem;
   border-radius: 1rem;
   box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   /* background-color:red; */
`;

export const InventoryItemDiv = styled.div`
   width: 23%;
   margin-bottom: 2rem;
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   border: .05rem solid #b0b0b0;
   /* cursor: pointer; */
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
      div:nth-of-type(3) {
         img {
            cursor: pointer;
            opacity: 1;
         }
      }
   }
   div {
      padding: 1rem;
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
   div:nth-of-type(1) {
      border-bottom: .1rem solid #b0b0b0;
   }
   div:nth-of-type(3) {
      width: 30%;
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
   form {
      width: 70%;
      margin: 1rem auto;
      text-align: left;
      div {
         display: flex;
         flex-direction: column;
         width: 100%;
         margin-top: 1rem;
      }
   }
`;