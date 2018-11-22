import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment';

import Spinner from '../ui/Spinner';

const ProjectDetails = ({ project }) => {
  const {
    title,
    content,
    authorFirstName,
    authorLastName,
    createdAt,
  } = project;
  if (project) {
    return (
      <div className="one__project">
        <div className="project">
          <span className="project__title">{title}</span>
          <p className="project__content">{content}</p>
          <div className="project__author">
            <span>{authorFirstName} </span>
            <span>{authorLastName}</span>
          </div>
          <div className="project__time">
            {moment(project.createdAt.toDate()).calendar()}
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  return {
    project: projects ? projects[id] : null,
  };
};

export default compose(
  firestoreConnect([{ collection: 'projects' }]),
  connect(
    mapStateToProps,
    null,
  ),
)(ProjectDetails);
