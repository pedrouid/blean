import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../styles';
import Loader from '../components/Loader';

const StyledButton = styled.button`
  border: none;
  border-style: none;
  box-sizing: border-box;
  padding: 6px;
  background-color: rgb(${colors.blue});
  font-size: ${fonts.medium};
  color: rgb(${colors.white});
  font-weight: 500;
  margin: 10px;
  width: 115px;
  border-radius: 23px;
`;

const Button = ({ text, fetching, ...otherProps }) => (
  <StyledButton {...otherProps}>
    {fetching ? <Loader /> : text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fetching: PropTypes.bool
};

Button.defaultProps = {
  fetching: false
};

export default Button;
