import styled from 'styled-components';
import { gray200, primaryColor } from '../../styles/colorVariables';

export const loginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${gray200};
  position: relative;
`;

export const loginCard = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 540px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: .5rem;
`;

export const loginDesc = styled.p`
  font-size: .875rem;
  a {
    color: ${primaryColor};
  }
`;

export const logo = styled.img`
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  height: 1.5rem;
  opacity: .5;
  transform: translateX(-50%);
`;