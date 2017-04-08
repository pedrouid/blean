import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../styles';
import Login from '../pages/Login';
import logo from '../assets/logo.svg';

const appLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledBase = styled.div`
  height: 100vh;
  text-align: center;
  background-color: rgb(${colors.dark});
  color: rgb(${colors.white});
`;

const StyledHeader = styled.div`
  height: 150px;
  padding: 20px;
`;

const StyledAppLogo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`;

class Base extends Component {
  render() {
    return (
      <StyledBase>
        <StyledHeader>
          <StyledAppLogo src={logo} alt="logo" />
          <h1>{'BLEAN'}</h1>
        </StyledHeader>
        <StyledContainer>
          <Login />
        </StyledContainer>
      </StyledBase>
    );
  }
}

export default Base;
