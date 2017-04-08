import React, { Component } from 'react';
import styled from 'styled-components';
import Welcome from '../pages/Welcome';
import Page from '../components/Page';
import Column from '../components/Column';
import logo from '../assets/logo.svg';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div`
  padding: 10px;
`;

const StyledAppLogo = styled.img`
  height: 70px;
`;

class Base extends Component {
  render() {
    return (
      <Page>
        <Column>
          <StyledHeader>
            <StyledAppLogo src={logo} alt="Blean" />
          </StyledHeader>
          <StyledContainer>
            <Welcome />
          </StyledContainer>
        </Column>
      </Page>
    );
  }
}

export default Base;
