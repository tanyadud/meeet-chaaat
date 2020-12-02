import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: OpenSans-Bold, sans-serif;
`;

export const Input = styled.textarea`
    width: 100%;
    overflow-y: auto;
    border: none;
    border-radius: 10px;
    resize: none;
    padding: 10px 40px 10px 15px;
    &:disabled {
      background: rgba(255, 255, 255, .6);
    }

`;

export const Button = styled.button`
   background: none;
   position: absolute;
   top: 12px;
   right: 12px;
   color: #820665;
   &:disabled {
       color: rgba(157,148,160,.5);
   }
   span {
      cursor: pointer;
      font-size: 26px
   }
`;
