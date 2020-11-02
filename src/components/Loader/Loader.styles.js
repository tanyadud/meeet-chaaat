import styled from 'styled-components';
import { keyframes } from 'styled-components';

const CircleOutAnimation = keyframes`
  0% { transform: scale(0.0); }
  50% { transform: scale(0.0);}
  100% { transform: scale(1.0);}
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  margin: 100px auto;
  bottom: 0;
  right: 103px;
`;

export const CircleIn = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${CircleOutAnimation} 2s infinite ease-in-out;
}
`;

export const CircleOut = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${CircleOutAnimation} -1s infinite ease-in-out;
}
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${CircleOutAnimation} -1s infinite ease-in-out;
}
`;
