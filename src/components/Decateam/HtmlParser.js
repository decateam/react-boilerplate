import React from 'react';

var himalaya = require('himalaya');
var toHTML = require('himalaya/translate').toHTML

class HtmlParser extends React.Component {

    // Override constructor
    constructor() {
        super();

        // Binding events
        this.handleTextareaKeyUp = this.keyUpHandler.bind(this, 'htmlInput');

        // Define initial state
        this.state = {
            jsonifyHtmlDocument: {},
            htmlifyJsonNodes: ''
        };
    }

    // Load HTML from textarea
    keyUpHandler(refName, e) {

        // Parse HTML into JSON
        let htmlParsed = himalaya.parse(e.target.value);

        // Transform back JSON to HTML for rendering preview
        let htmlifyJson = toHTML(htmlParsed);

        this.setState({
            jsonifyHtmlDocument: htmlParsed,
            htmlifyJsonNodes: htmlifyJson
        });
    }

    // Recursive render himalaya json
    recurse(node) {
        for (var i = 0; i < node.length; i++) {
            console.log(node[i]);
            if(node[i].children !== undefined) {
                this.recurse(node[i].children);
            }
        }
    } 

    // Render component
    render() {
      return (
          <div>
            <div className="input">
                <textarea id="source" onKeyUp={this.handleTextareaKeyUp} ref="htmlInput" placeholder="HTML a charger"></textarea>
            </div>
            <div className="output">
                { this.recurse(this.state.jsonifyHtmlDocument) }
            </div>
          </div>
        )
    }
}

export default HtmlParser;