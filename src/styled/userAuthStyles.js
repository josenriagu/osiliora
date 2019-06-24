import styled from 'styled-components';

export const HeaderStyle = styled.header`
   background-color: #ffffff;
   border-bottom: .1rem solid #b0b0b0;
   text-align: center;
   padding: 1.6rem;
   /* rules to make the header sticky */
   position: fixed;
   top: 0;
   width: 100%;
   :hover {
      box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   }
   h2 {
      margin: 0;
   }
`;
export const LoginWrapperDiv = styled.div`
   width: 40%;
   margin: 7.5rem auto;
   display: flex;
   flex-direction: column;
   border-radius: 1rem;
   box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   @media (max-width: 500px) {
      width: 92%;
      margin-top: 7rem;
   }
   section:nth-of-type(1) {
      background-color: #bdf2d5;
      border-radius: 1rem 1rem 0 0;
      text-align: center;
   }
   section:nth-of-type(2) {
      padding: 0 4rem 4rem;
      display: flex;
      flex-direction:column;
      align-items: center;
      form {
         width: 70%;
         margin: 1rem auto;
         text-align: left;
         @media (max-width: 500px) {
            width: 100%;
         }
         a {
            text-decoration: none;
            color: #6ea22c;
         }
         div {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 1rem;
            span {
               font-weight: bold;
            }
            p {
               text-align: center;
               font-size: 1.4rem;
               margin: 0; 
            }
         }
      }
   }
`;
export const SignupWrapperDiv = styled.div`
   width: 70%;
   margin: 7.5rem auto 0;
   display: flex;
   border-radius: 1rem;
   box-shadow: -0.1rem 1rem 1rem 0 rgba(0, 0, 0, 0.08);
   @media (max-width: 500px) {
      width: 92%;
      margin-top: 7rem;
      flex-direction: column;
   }
   section:nth-of-type(1) {
      width: 55%;
      padding: 4rem;
      background-color: #bdf2d5;
      /* border radius shorthand: top-left, top-right, bottom-left, bottom-right */
      border-radius: 1rem 0 0 1rem;
      @media (max-width: 500px) {
         width: 100%;
         border-radius: 1rem 1rem 0 0;
         border-bottom-left-radius: 0;
         padding: 2rem;
      }
      div {
         height: 35vmin;
         text-align: center;
         img {
            max-width: 100%;
            max-height: 100%;
            opacity: .08;
         }
      }
      ul {
         list-style-image: url('/assets/images/arrow-point-to-right.png');
         margin: 0;
         padding-left: 1rem;
      }
      li {
         margin-left: 3rem;
         padding-bottom: .6rem;
      }
      p {
         text-align: left;
         color: rgba(0, 0, 0, 0.7);
      }
   }
   section:nth-of-type(2) {
      width: 45%;
      padding: 0 4rem 4rem;
      @media (max-width: 500px) {
         width: 100%;
         padding: 0 2.5rem 2.5rem;
      }
      form {
         margin-right: 7.3rem;
         display: flex;
         flex-wrap:wrap;
         justify-content: space-between;
         @media (max-width: 500px) {
            margin-right: 0;
         }
         a {
            text-decoration: none;
            color: #6ea22c;
         }
         div {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 1rem;
            :nth-of-type(1), :nth-of-type(2) {
            width: 48.5%;
            }
            :nth-of-type(6) {
            p {
               text-align: center;
               font-size: 1.4rem;
               margin: 0;
            }
         }
      }
   }
}
`