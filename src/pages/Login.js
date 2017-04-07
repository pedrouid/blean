import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loginAuth, loginUpdateEmail, loginUpdatePassword } from '../redux/_login';
import { fonts } from '../styles';

const StyledIntro = styled.p`
  font-size: ${fonts.h4};
`;

class Login extends Component {
  onSubmit = () => {
    this.props.loginAuth(this.props.email, this.props.password);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <StyledIntro> {'To get started, login with your details below'} </StyledIntro>
          <input type="email" onChange={({ target }) => this.props.loginUpdateEmail(target.value)} />
          <input type="password" onChange={({ target }) => this.props.loginUpdatePassword(target.value)} />
          <button type="submit" disabled={this.props.fetching} />
        </form>
      </div>
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
