import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectList = ({ projects }) => {
  return (
    <React.Fragment>
      {projects &&
        projects.map(project => (
          <Link
            className="project__wrapper"
            key={project.id}
            to={`/project/${project.id}`}
          >
            <ProjectSummary
              title={project.title}
              content={project.content}
              authorFirstName={project.authorFirstName}
              authorLastName={project.authorLastName}
              createdAt= {moment(project.createdAt.toDate()).calendar()}
            />
          </Link>
        ))}
    </React.Fragment>
  );
};
export default ProjectList;
