import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Column from '../components/Column';
import logo from '../assets/logo.svg';
import { getAccount } from '../helpers/utilities';

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

class Dashboard extends Component {
  render() {
    return (
      <Page>
        <Column>
          <StyledHeader>
            <StyledAppLogo src={logo} alt="Blean" />
          </StyledHeader>
          <StyledContainer>
            {`Congratulations, You're Logged in ${getAccount().name}`}
          </StyledContainer>
        </Column>
      </Page>
    );
  }
}

export default Dashboard;
