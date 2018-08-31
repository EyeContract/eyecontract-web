import styled from 'styled-components';
import { primaryColor, whiteColor, gray100 } from '../../styles/colorVariables';

export const loginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${primaryColor};
  position: relative;
`;

export const loginCard = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 540px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  background: ${gray100};
  border-radius: .5rem;
`;