import React, { PropTypes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-style: none;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 5px;
  opacity: 0.5;
  width: 100%;
`;

const Button = ({ children, ...otherProps }) => (
  <StyledButton {...otherProps}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export default Button;
