import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import styled, { keyframes } from 'styled-components';
import { colors } from '../styles';
import logo from '../assets/logo.svg';

const appLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 400px;
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

const asyncLogin = asyncComponent({
  resolve: () => System.import('../pages/Login')
});

class Base extends Component {
  render() {
    return (
      <StyledBase>
        <StyledHeader>
          <StyledAppLogo src={logo} alt="logo" />
          <h1>{'BLEAN'}</h1>
        </StyledHeader>
        <StyledContainer>
          <Switch>
            <Route
              exact
              path={'/login'}
              render={() => (<asyncLogin />)}
            />
          </Switch>
        </StyledContainer>
      </StyledBase>
    );
  }
}

export default Base;
