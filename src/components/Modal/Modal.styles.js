import styled from "styled-components";

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(185, 164, 177, .6);
    z-index: 99;
`;
export const Container = styled.div`
    position: relative;
    background: #FFFFFF;
    padding: 40px 40px 32px;
    border-radius: 5px;
    p {
      margin-bottom: 8px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 7px;
    top: 10px;
    background: none;
`;
