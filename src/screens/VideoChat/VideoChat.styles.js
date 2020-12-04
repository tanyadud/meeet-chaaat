import styled from 'styled-components';

export const VIDEO_STYLES = {
  width: 130,
  height: 150,
  position: 'absolute',
  right: 25,
  top: 25,
  borderRadius: 10
};

export const Container = styled.div`
  height: 100%;
  background-color: #F9F6F8;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  height: 100%;
  width: 70%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ChatContainer = styled.div`
  height: 100%;
  width: 30%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 100%;
    height: 110px; 
  }
`;

export const Chat = styled.div`
  height: 100%;;
  flex-direction: column;
  display:flex;
  @media (max-width: 1024px) {
    background: #F9F6F8;
    max-width: 400px;
    width: 100%;
    height: 100%;
    bottom: 0;
    position: absolute;
    padding: 20px;
   }
`;
export const ChatOverlay = styled.div`
  height: calc(100% - 55px);
  flex-direction: column;
  display: flex;
  @media (max-width: 1024px) {
    display: ${props => props.isVisible || "none"};
    position: absolute;
    left: 0;
    background: rgba(0,0,0, .5);
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 9999;
    height: 100%;
  }
`;

export const CloseButton = styled.button`
  display: none;
  background: none;
  position: absolute;
  top: 15px;
  right: 15px;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MessagesContainer = styled.div`
  overflow-y: auto;
  position: relative;
  height: 100%;
  margin: 50px 0px 30px;
`;

export const Video = styled.video`
  background: #000000;
  object-fit: cover;
  width: 100%;
  height: 100%;
 
`;

export const NoMessages = styled.p`
  position: absolute;
  top: 50%;
  right: calc(50% - 92px);
`;
