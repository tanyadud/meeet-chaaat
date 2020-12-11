import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background-color: #F6F1F8;
    color: #9D94A0;
    border-radius: 5px;
        font-size: 14px;
            color: #9D94A0;
`;

export const InputText = styled.input`
    color: #9D94A0;
    width: 100%;
    background-color: #F6F1F8;
    border: none;
    border-radius: 5px;
    padding: 15px 35px 15px 15px;
    cursor: pointer;
    &::placeholder {
          color: #9D94A0;
    }
`;

export const Icon = styled.img`
    position: absolute;
    right: 5px;
    top: 11px;
`;

export const DropdownContainer = styled.div`
    padding: 15px;
    border-top: 1px solid rgba(78, 9, 52, 0.09);
    position: absolute;
    width: 100%;
    z-index: 999;
    background-color: #F6F1F8;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const DropdownList = styled.div`
    max-height: 132px;
    overflow-y: auto;
`;

export const DropdownItem = styled.div`
    cursor: pointer;
    padding-bottom: 15px;
    &:last-child {
       padding-bottom: 0;
    }
    &:hover {
       color: #AA076B;
    }
`;
