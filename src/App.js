import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
