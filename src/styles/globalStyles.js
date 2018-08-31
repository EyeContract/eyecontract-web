import styled from 'styled-components';
import { blackColor, hexToRgb, primaryColor, whiteColor } from './colorVariables';

export const pageTitle = styled.h1`
  font-size: 1.825rem;
`;

export const pageInput = styled.div`
  appearance: none;
  border: 0;
  box-shadow: 0 .125rem .5rem rgba(${hexToRgb(blackColor)}, .08);
  display: block;
  position: relative;
  padding: 1rem;
  width: 100%;
  margin-bottom: .5rem;
  border-radius: .25rem;
  box-sizing: border-box;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    appearance: none;
    background: none;
    border: none;
    padding-left: 4rem;
    font-size: 1rem;
    font-family: inherit;
    box-sizing: border-box;

    &::placeholder {
      color: rgb(${hexToRgb(blackColor)}, .2)
    }
  }
`;

export const pageCtaButton = styled.button`
  display: block;
  background: ${primaryColor};
  border: 0;
  border-radius: .25rem;
  color: ${whiteColor};
  font-size: 1rem;
  padding: 1rem
  width: 100%;
`;