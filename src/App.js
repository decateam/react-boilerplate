import React, { Component } from 'react';
// import CodeFest             from "./components/CodeFest/CodeFest";
import AppNavigation        from "./components/Decateam/AppNavigation";

// import * as ReactBootstrap  from 'react-bootstrap';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
        <div className="row">
          <div className="col-md-4">TOC</div>
          <div className="col-md-8">HTML</div>
        </div>
      </div>
    );
  }
}

export default App;
