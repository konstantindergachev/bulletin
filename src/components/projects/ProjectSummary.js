import React from 'react';
import './ProjectSummary.scss';

const ProjectSummary = ({
  title,
  content,
  authorFirstName,
  authorLastName,
  createdAt,
}) => {
  return (
    <div className="project">
      <span className="project__title">{title}</span>
      <p className="project__content">{content}</p>
      <div className="project__author">
        <span>Posted by {authorFirstName} </span>
        <span>{authorLastName}</span>
      </div>
      <p className="project__time">{createdAt}</p>
    </div>
  );
};
export default ProjectSummary;
