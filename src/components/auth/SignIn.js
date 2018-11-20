import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import Spinner from '../ui/Spinner';

import { signIn } from '../../actions/authActions';
import TextFieldGroup from '../ui/TextFieldGroup';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  handleSubmit = ev => {
    ev.preventDefault();
    const { firebase } = this.props;
    this.props.signIn(this.state, firebase);
  }

  render() {
    const { auth, isAuthenticated, message } = this.props;
    if (!auth.isLoaded) {
      return <Spinner />;
    } else if (isAuthenticated || auth.uid) {
      return <Redirect to="/" />;
    } else {
      return (
        <section className="signin__wrapper">
          <form onSubmit={this.handleSubmit} className="signin">
            {!isAuthenticated ? (
              <span className="error__message">{message}</span>
            ) : null}
            <h5 className="signin__text">Log In</h5>
            <TextFieldGroup
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
            <TextFieldGroup
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
            <div className="input-field">
              <button className="btn btn__create">Log in</button>
            </div>
          </form>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  message: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.firebase.auth,
});

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    { signIn },
  ),
)(SignIn);
