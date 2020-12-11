import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; 
`;

export const Button = styled.button`
    width: 100%;
    display: block;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    background: rgb(170,7,107);
    background: linear-gradient(90deg, rgba(170,7,107,1) 0%, rgba(97,4,95,1) 100%);

    transition: all .4s ease-in-out;
    background-size: 200% 100%;
    &:hover {
      background-position: 100% 0;
      transition: all .4s ease-in-out;
    }
    &:disabled {
        background: rgba(157, 148, 160, .5);
    }
`;

export const Overlay = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 100%;
     background: rgba(0, 0, 0, .6);
`;

export const LoginForm = styled.div`
    display: flex;
    height: 380px;
    width: 300px;
    border-radius: 5px;
    justify-content: space-between;
    flex-direction: column;
    padding: 35px;
    background: #fff;
    // border-top-right-radius: 35px;
    // border-top-left-radius: 35px;
`;

export const Slogan = styled.div`
    display: flex;
    align-items: center;
    font-family: OpenSans, sans-serif;
    font-size: 20p;
    
    img {
      width: 40px;
      margin-right: 10px;
    }
`;
