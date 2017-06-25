import React from 'react';


class HtmlParser extends React.Component {

    constructor() {
        super();
        this.state = { htmldocument: "<div>Example HTML string</div>" };
        this.fetchExternalHTML = this.fetchExternalHTML.bind(this);
    }

    fetchExternalHTML() {
      var data = require(this.props.filename);
      this.setState({htmldocument: data});
    }

    render() {
      return (
        <div>Hello</div>
        )
    }
}

export default HtmlParser;