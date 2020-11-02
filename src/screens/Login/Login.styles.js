import styled from "styled-components";

export const StyleLoginPage = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("../../common/images/speaking.jpg");
  
`
export const ButtonNext = styled.button`
    font-size: 20px;
    margin-top: 20px;
    padding: 11px 15px;
    border: none; 
    background: #212121;
    color: #fff;
    cursor: pointer;
    width: 100%;
    &:disabled {
       background: rgba(0, 0, 0, .4);
       cursor: default;
       color: rgba(255, 255, 255, .7);
    }
`
export const Stylebox = styled.div`k
    text-align: center;
    color: #3F3E41;
    max-width: 288px;
    background: #fff;
    padding: 20px 30px 40px 30px;
`

export const Select = styled.select `
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 0;
    font-size: 16px;
    &:disabled {
       color: rgba(255, 255, 255, .7);
    }
`;
