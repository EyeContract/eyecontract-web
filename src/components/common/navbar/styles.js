import styled from 'styled-components';
import { whiteColor, primaryColor, gray300, hexToRgb } from '../../../styles/colorVariables';

export const navbarWrapper = styled.div`
  background: ${whiteColor};
  width: 22.25rem;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const linkIcon = styled.div`
  flex: 1;
  a {
    display: block;
    border-radius: 5rem;
    text-decoration: none;
    color: ${gray300};
    padding: .5rem 1rem;
    margin: 0 -1rem 1rem;
    display: flex;
    align-items: center;
    transition: all .3s ease-in-out;
    font-size: 1.125rem;

    i {
      margin-right: 1.5rem;
    }

    &.active {
      color: ${primaryColor};
      background: rgba(${hexToRgb(primaryColor)}, .1);

      i {
        color: ${primaryColor};
      }
    }
  }
`;

export const logo = styled.img`
  width: 60%;
  margin-bottom: 2.5rem;
`;

export const ctaButton = styled.button`
  appearance: none;
  border: 0;
  border-radius: .5rem;
  background: ${primaryColor};
  box-shadow: 0 .25rem .5rem rgba(${hexToRgb(primaryColor)}, .4);
  cursor: pointer;
  color: ${whiteColor};
  display: flex;
  align-items: end;
  justify-content: center;
  font-size: 1.25rem;
  padding: 1rem;
  width: 100%;
  transition: all .3s cubic-bezier(0.52, 0, 0.46, 0.99);

  &:hover{
    transform: scale(1.05);
  }

  &:active,
  &:focus {
    outline: 0;
  }
  
  i {
    margin-right: .5rem;
  }
`;