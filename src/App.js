import React, { Component } from 'react';
import AppNavigation        from "./components/Decateam/AppNavigation";
import HtmlParser           from "./components/Decateam/HtmlParser";

// import * as ReactBootstrap  from 'react-bootstrap';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      jsonData: require('./../data/document.json')
    };
  }

  componentDidMount() {
      this.setState({ loading: false });
  }

  render() {
    return (
      <div id="App">
        <AppNavigation />
        <HtmlParser jsonData={this.state.jsonData[2].children[3]} />
      </div>
    );
  }
}

export default App;
