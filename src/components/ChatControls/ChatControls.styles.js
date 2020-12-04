import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: OpenSans-Bold, sans-serif;
`;

export const UsersCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    margin-left: 10px;
    font-size: 14px;
    background: #FFFFFF;
    span {
      margin-right: 10px;
      color: ${props => !props.isDisabled ? '#820665' : 'rgba(157,148,160,.5)' };
    }
`;

export const Button = styled.button`
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: center;
    padding: 0 15px;
    border-radius: 10px;
    background: #FFFFFF;
    color: #820665;
    &:disabled {
       color: rgba(157, 148, 160, .5);
    }
`;

export const StartButton = styled(Button)`
    background: linear-gradient(90deg,rgba(170,7,107,1) 0%,rgba(97,4,95,1) 100%);
    color: #FFFFFF;
    margin-right: 10px;
    span {
      margin-left: 5px;
    }
    &:disabled {
        color: #FFFFFF;
        background: rgba(157, 148, 160, .5);
    }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
