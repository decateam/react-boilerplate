import React, { Component } from 'react';
// import CodeFest             from "./components/CodeFest/CodeFest";
import AppNavigation        from "./components/Decateam/AppNavigation";

// import * as ReactBootstrap  from 'react-bootstrap';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
      this.setState({ loading: false })
  }

  render() {
    return (
      <div className="App">
        <AppNavigation />
      </div>
    );
  }
}

export default App;
