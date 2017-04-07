import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { loginAuth, loginUpdateEmail, loginUpdatePassword } from '../redux/_login';
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

class Login extends Component {
  onSubmit = () => {
    this.props.loginAuth(this.props.email, this.props.password);
  }
  render() {
    return (
      <StyledApp>
        <StyledAppHeader>
          <StyledAppLogo src={logo} alt="logo" />
          <h2>Welcome to Blean</h2>
        </StyledAppHeader>
        <StyledAppIntro className="App-intro">
          To get started, login with your details below
        </StyledAppIntro>
        <form onSubmit={this.onSubmit}>
          <input type="email" onChange={({ target }) => this.props.loginUpdateEmail(target.value)} />
          <input type="password" onChange={({ target }) => this.props.loginUpdatePassword(target.value)} />
          <button type="submit" fetching={this.props.fetching} />
        </form>
      </StyledApp>
    );
  }
}

Login.propTypes = {
  loginAuth: PropTypes.func.isRequired,
  loginUpdateEmail: PropTypes.func.isRequired,
  loginUpdatePassword: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

const reduxProps = ({ login }) => ({
  fetching: login.fetching,
  email: login.email,
  password: login.password
});

export default connect(reduxProps, { loginAuth, loginUpdateEmail, loginUpdatePassword })(Login);
