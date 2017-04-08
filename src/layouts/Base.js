import React, { Component } from 'react';
import styled from 'styled-components';
import Welcome from '../pages/Welcome';
import Column from '../components/Column';
import logo from '../assets/logo.svg';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBase = styled.div`
  height: 100vh;
  text-align: center;
`;

const StyledHeader = styled.div`
  height: 150px;
  padding: 20px;
`;

const StyledAppLogo = styled.img`
  height: 80px;
`;

class Base extends Component {
  render() {
    return (
      <StyledBase>
        <Column>
          <StyledHeader>
            <StyledAppLogo src={logo} alt="logo" />
          </StyledHeader>
          <StyledContainer>
            <Welcome />
          </StyledContainer>
        </Column>
      </StyledBase>
    );
  }
}

export default Base;
