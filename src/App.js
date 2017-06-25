import React, { Component } from 'react';
import AppNavigation        from "./components/Decateam/AppNavigation";
import HtmlParser           from "./components/Decateam/HtmlParser";
import TOC                  from "./components/Decateam/TOC";

// import * as ReactBootstrap  from 'react-bootstrap';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      jsonData: require('./../data/document.json')
    }
  }

  componentDidMount() {
      this.setState({ loading: false })
  }

  render() {
    return (
      <div className="App">
        <AppNavigation />
        <div className="row">
          <div className="col-md-4">
            <TOC jsonData={this.state.jsonData}/>
          </div>
          <div className="col-md-8">
            <HtmlParser />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
