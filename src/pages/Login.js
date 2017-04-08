import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { loginAuth, loginUpdateEmail, loginUpdatePassword } from '../redux/_login';

class Login extends Component {
  onSubmit = () => {
    this.props.loginAuth(this.props.email, this.props.password);
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h4> {'To get started, login with your details below'} </h4>
        <Input type="email" onChange={({ target }) => this.props.loginUpdateEmail(target.value)} />
        <Input type="password" onChange={({ target }) => this.props.loginUpdatePassword(target.value)} />
        <Button type="submit" disabled={this.props.fetching}>{'Login'}</Button>
      </Form>
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
