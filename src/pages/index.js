import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import NotFound from './NotFound';
import Column from '../components/Column';
import logo from '../assets/logo.svg';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  text-align: center;
  will-change: transform, opacity;
  animation: 0.5s ease 0s normal 1 ${fadeIn};
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
`;

const StyledHeader = styled(Link)`
  padding: 10px;
`;

const StyledAppLogo = styled.img`
  height: 70px;
`;

class Pages extends Component {
  state = {
    logo: true
  }
  toggleLogo = (bool) => {
    this.setState({ logo: bool });
  }
  render() {
    return (
      <StyledWrapper>
        <Column>
          <StyledHeader to="/">
            {logo && <StyledAppLogo src={logo} alt="Blean" />}
          </StyledHeader>
          <StyledContainer>
            <Switch>
              <Route exact path={'/get-started'} component={Welcome} />
              <Route exact path={'/login'} component={Login} />
              <Route exact path={'/signup'} component={Signup} />
              <Route
                render={routerProps => (
                  <NotFound hideLogo={this.toggleLogo} {...routerProps} />
                )}
              />
            </Switch>
          </StyledContainer>
        </Column>
      </StyledWrapper>
    );
  }
}

export default Pages;
