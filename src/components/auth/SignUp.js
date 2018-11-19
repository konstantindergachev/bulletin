import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';

import { signUp } from '../../actions/authActions';
import Spinner from '../ui/Spinner';
import TextFieldGroup from '../ui/TextFieldGroup';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
  }

  handleOnChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    const { firebase, firestore } = this.props;
    this.props.signUp(this.state, firebase, firestore);
  };
  render() {
    const { message, auth } = this.props;

    if (!auth.isLoaded) {
      return <Spinner />;
    } else if (auth.uid) {
      return <Redirect to="/" />;
    } else {
      return (
        <section className="signup__wrapper">
          <form onSubmit={this.handleSubmit} className="signup">
            {message !== null ? (
              <span className="error__message">{message}</span>
            ) : null}
            <h5 className="signup__text">Sign Up</h5>
            <TextFieldGroup
              name="lastname"
              placeholder="lastname"
              value={this.state.lastname}
              onChange={this.handleOnChange}
            />
            <TextFieldGroup
              name="firstname"
              placeholder="firstname"
              value={this.state.firstname}
              onChange={this.handleOnChange}
            />
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
            <button className="btn btn__create">Sign up</button>
          </form>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  message: state.auth.error,
  auth: state.firebase.auth,
});

export default compose(
  firebaseConnect(),
  firestoreConnect(),
  connect(
    mapStateToProps,
    { signUp },
  ),
)(SignUp);
