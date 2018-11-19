import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
