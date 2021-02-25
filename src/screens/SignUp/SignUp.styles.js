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
    position: relative;
    display: flex;
    width: 300px;
    border-radius: 5px;
    justify-content: space-between;
    flex-direction: column;
    padding: 35px;
    background: #fff;
`;

export const Slogan = styled.div`
    display: flex;
    align-items: center;
    font-family: OpenSans, sans-serif;
    font-size: 20px;
    
    img {
      width: 40px;
      margin-right: 10px;
    }
`;

export const TextField = styled.input`
    color: #9D94A0;
    width: 100%;
    background-color: #F6F1F8;
    border: none;
    border-radius: 5px;
    padding: 15px 35px 15px 15px;
`;

export const ErrorMessage = styled.p`
    font-size: 14px;
    margin-top: 5px;
    background: #ffebee;
    border: 1px solid red;
    border-radius: 3px;
    margin: 15px 0 20px;
    padding: 5px 10px;
`;

export const SignInLink = styled.div`
    font-size: 12px;
    margin: 10px 0 20px;
    
    a {
      color: #36083A;
      font-size: 14px;
      font-weight: bold;
    }
`;

export const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgba(255, 255, 255, .5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
