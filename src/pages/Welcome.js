import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../styles';
import Button from '../components/Button';

const StyledApp = styled.div`
  text-align: center;
  height: 200px;
`;

const StyledIntro = styled.h4`
  color: rgb(${colors.blue});
`;

class Welcome extends Component {
  render() {
    return (
      <StyledApp>
        <StyledIntro>{'Be in charge of your fitness'}</StyledIntro>
        <Button text="Login" onClick={this.onLogin} />
        <Button text="Signup" onClick={this.onSignup} />
      </StyledApp>
    );
  }
}
export default Welcome;
