import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledInput = styled.input`
  border: none;
  border-style: none;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 5px;
  margin: 5px 0;
  width: 100%;
  &::placeholder {
    color: rgb(${colors.darkGrey})l
  }
`;

const Input = () => (
  <StyledInput />
);

export default Input;
