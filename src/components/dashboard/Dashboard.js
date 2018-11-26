import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

import ProjectList from '../projects/ProjectList';
import { getProjects } from '../../actions/projectActions';
import Spinner from '../ui/Spinner';
import Notifications from './Notifications';

import './Dashboard.scss';
class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { auth, projects, notifications} = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
      if (projects) {
        return (
          <section className="dashboard">
            <ProjectList projects={projects} />
            <Notifications notifications={notifications} />
          </section>
        );
      } else {
        return <Spinner />;
      }
    }
  }
}

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects,
  auth: state.firebase.auth,
});

export default compose(
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
  ]),
  connect(
    mapStateToProps,
    { getProjects },
  ),
)(Dashboard);
