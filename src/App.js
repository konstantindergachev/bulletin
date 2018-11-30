import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import MobileSidebar from './components/navigation-mobile/MobileSidebar';
import NotFound from './components/not-found/NotFound';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleTogglerClick = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  handleCloseClick = () => {
    this.setState({ open: false });
  };

  render() {
    const {open} = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar togglerClick={this.handleTogglerClick} open={open} />
          <MobileSidebar
            open={open}
            close={this.handleCloseClick}
          />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/create" component={CreateProject} />
            <Route render={props => <NotFound {...props} />} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
