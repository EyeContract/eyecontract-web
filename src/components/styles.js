import styled from 'styled-components';
import { gray200 } from '../styles/colorVariables';

export const AppWrapper = styled.div`
  background: ${gray200};
  display: flex;
  width: 100vw;
  height: 100vh;

  div:last-child {
    padding: 1rem 2rem 0;
    flex: 1;
  }
`;