import React from 'react';
import Navbar from './components/layout/Navbar';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Navbar />
      </div>
    );
  }
}

export default App;
