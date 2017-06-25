import React from 'react';

import TOC from "./TOC";
  
import ReaderVoice from './ReaderVoice';

var himalaya = require('himalaya');
var toHTML = require('himalaya/translate').toHTML;

class HtmlParser extends React.Component {

    // Override constructor
    constructor(props) {
        super(props);

        // Binding events
        this.handleTextareaKeyUp = this.keyUpHandler.bind(this, 'htmlInput');

        // Define initial state
        this.state = {
            jsonifyHtmlDocument: {},
            htmlProcessed: {},
            htmlifyJsonNodes: ''
        };
    }

    // Load HTML from textarea
    keyUpHandler(refName, e) {
        console.log(refName, e);
        let htmlParsed = himalaya.parse(e.target.value);
        
        //let htmlProcess = ReaderVoice.readText(htmlParsed);
        
        let htmlifyJson = toHTML(htmlParsed);

        this.setState({
            jsonifyHtmlDocument: htmlParsed,
            //htmlProcessed: htmlProcess,
            htmlifyJsonNodes: htmlifyJson
        });
    }

    // Render component
    render() {
      return (
        <div className="row">
            <div className="col-md-4">
                <TOC jsonData={this.state.jsonifyHtmlDocument}/>
            </div>
            <ReaderVoice jsonData={this.state.jsonifyHtmlDocument} />
            <div className="col-md-8">
                <div className="input">
                    <textarea id="source" onKeyUp={this.handleTextareaKeyUp} ref="htmlInput" placeholder="HTML a charger"></textarea>
                </div>
                <div className="output">
                    <div className="content" dangerouslySetInnerHTML={{__html: this.state.htmlifyJsonNodes}}></div>
                </div>
            </div>
        </div> 
        );
    }
}

export default HtmlParser;