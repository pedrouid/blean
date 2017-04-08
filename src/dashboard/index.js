import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Column from '../components/Column';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import logo from '../assets/logo.svg';
import { getSession } from '../helpers/utilities';

const StyledWrapper = styled(FadeIn)`
  height: 100vh;
  text-align: center;
`;

const StyledContainer = styled(FadeIn)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
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
      <StyledWrapper>
        <Column>
          <StyledHeader>
            <StyledAppLogo src={logo} alt="Blean" />
          </StyledHeader>
          <StyledContainer>
            {`Congratulations, You're Logged in ${getSession().email}`}
          </StyledContainer>
          <Link to="/logout"><Button line text="Logout" /></Link>
        </Column>
      </StyledWrapper>
    );
  }
}

export default Dashboard;
