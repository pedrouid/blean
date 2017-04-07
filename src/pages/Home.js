// @flow

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.svg';

const appLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledApp = styled.div`
  text-align: center;
`;

const StyledAppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const StyledAppLogo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`;

const StyledAppIntro = styled.p`
  font-size: large;
`;

class Home extends Component {
  render() {
    return (
      <StyledApp>
        <StyledAppHeader>
          <StyledAppLogo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </StyledAppHeader>
        <StyledAppIntro className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </StyledAppIntro>
      </StyledApp>
    );
  }
}

export default Home;
