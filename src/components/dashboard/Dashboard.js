import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render() {
    return (
      <section className="dashboard">
        <h1 className="dashboard__title">Dashboard page</h1>
        <ProjectList />
      </section>
    );
  }
}

export default Dashboard;
