import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Button = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 15px;
   height: 50px;
   border-radius: 10px;
   margin: 0 8px;
   background: rgba(246, 241, 248, .7);
    &:disabled {
      color: #FFFFFF;
      background: rgba(157,148,160,.5);
    }
   span {
      margin-right: 5px;
      @media (max-width: 480px) {
        display: none;
      }
   }
`;

export const ChatButton = styled(Button)`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const StopButton = styled(Button)`
  background: rgba(255, 0, 31, .7);
  color: #FFFFFF;
`;
