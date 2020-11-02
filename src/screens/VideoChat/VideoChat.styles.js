import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  font-size: 16px;
  padding: 7px 28px;
  border: none;
  background: #a9d9de;
  color: #fff;
  margin-right: 10px;
  background: #212121;
  cursor: pointer;
  &:disabled {
    color: rgba(0, 0, 0, 0.5);
    cursor: default;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #eceff1;
  border-bottom: 1px solid #e0e0e0;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ChatBox = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LocalPlayer = styled.video`
  background: #212121;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const RemotePlayer = styled.video`
  background: #212121;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CommonPlayer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

export const ChatInputContainer = styled.div`
  position: relative;
`;

export const ChatInput = styled.textarea`
  padding: 15px 50px 15px 15px;
  resize: none;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: #fff;
`;

export const ChatButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  top: 15px;
  right: 5px;
  color: #212121;
  &:disabled {
    color: rgba(0, 0, 0, 0.5);
    cursor: default;
  }
`;

export const ChatMessagesContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  background: #eceff1;
  padding: 15px;
`;

export const NoMessagesTitle = styled.p`
  text-align: center;
`;

export const MyMessage = styled.div`
  display: inline-block;
  padding: 15px;
  margin-bottom: 10px;
  word-break: break-word;
  background: #fff;
  max-width: 75%;
`;

export const ChatMessage = styled.div`
  display: inline-block;
  padding: 15px;
  margin-bottom: 10px;
  word-break: break-word;
  background: #66bb6a;
  color: #fff;
  max-width: 75%;
`;

export const PeersStat = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  font-weight: 500;
`;

export const PeersIcon = styled.span`
  font-size: 32px;
`;

export const PeersCount = styled.span`
  position: absolute;
  background: #66bb6a;
  padding: 0 5px;
  border-radius: 100%;
  bottom: 2px;
  color: #fff;
  right: 2px;
  font-size: 13px;
`;

export const ModalErrorContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalError = styled.div`
  position: relative;
  padding: 30px 15px;
  background-color: #fff;
  width: 300px;
  display: flex;
  justify-content: center;
`;

export const CloseModal = styled.span`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212121;
  width: 100%;
  height: 100%;
  color: #fff;
`;

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  position: absolute;
  border: 6px solid #fff;
  border-top: 6px solid #757575;
  border-radius: 100%;
  width: 60px;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  height: 60px;
  animation: ${Spin} 3s linear infinite;
}
`;

export const PlayerContainer = styled.div`
  position: relative;
  height: 50vh;
}
`;

export const OpenChatIcon = styled.button`
  border: none;
  background: none;
  span {
    font-size: 28px;
  }
  &:disabled {
    color: rgba(0,0,0,0.5);
    cursor: default;
  }
}
`;

export const CloseChatIcon = styled.span`
  position: absolute;
  right: 8px;
  top: 10px;
  cursor: pointer;
  font-size: 28px;
}
`;

export const MobileControls = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  justify-content: space-between;
  background: #fff;
  @media (max-width: 768px) {
    display: flex;
  }
}
`;

export const ChatContainer = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    height: 50vh;
    width: 100%;
    bottom: 0;
    ${ChatMessagesContainer} {
      padding-top: 50px;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;

export const MobileButtons = styled.div `
    display: none;
    width: 98px;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: flex;
    }
`;

export const DesktopButtons = styled.div `
    @media (max-width: 768px) {
        display: none;
    }
`;

export const RoundButton = styled.button `
    border: none;
    border-radius: 50%;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    &:disabled {
        color: rgba(0, 0, 0, 0.5);
        cursor: default;
        background: rgba(0, 0, 0, 0.4);
  }
`;

