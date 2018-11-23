import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

import { createProject } from '../../actions/projectActions';
import TextFieldGroup from '../ui/TextFieldGroup';
import TextAreaFieldGroup from '../ui/TextAreaFieldGroup';

import './CreateProject.scss';

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  handleOnChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { title, content } = this.state;

    const newProject = {
      title: title,
      content: content,
    };
    const {
      auth: { uid },
      profile,
      firestore,
      history,
    } = this.props;
    this.props.createProject(newProject, uid, profile, firestore, history);
  }

  render() {
    const { auth } = this.props;
    if (auth.uid) {
      return (
        <section className="create__wrapper">
          <form className="create" onSubmit={this.handleSubmit}>
            <h5 className="create__title">Create new project</h5>
            <TextFieldGroup
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleOnChange}
            />
            <TextAreaFieldGroup
              name="content"
              placeholder="project content"
              value={this.state.content}
              onChange={this.handleOnChange}

            />
            <button className="btn btn__create">Create</button>
          </form>
        </section>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

const mapStateToProps = state => ({
  profile: state.firebase.profile,
  auth: state.firebase.auth,
});

export default compose(
  firestoreConnect(),
  connect(
    mapStateToProps,
    { createProject },
  ),
)(CreateProject);
