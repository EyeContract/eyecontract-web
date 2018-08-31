import styled from 'styled-components';
import { blackColor, hexToRgb } from './colorVariables';

export const pageTitle = styled.h1`
  font-size: 1.825rem;
`;

export const pageInput = styled.div`
  appearance: none;
  border: 0;
  box-shadow: 0 .125rem .5rem rgba(${hexToRgb(blackColor)}, .08);
  display: block;
`;