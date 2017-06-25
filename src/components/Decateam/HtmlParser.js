import React                 from 'react';
import TOC                   from "./TOC";
import AccessibilityControls from "./AccessibilityControls";
import ReaderVoice           from './ReaderVoice';

var himalaya = require('himalaya');
var toHTML = require('himalaya/translate').toHTML;

class HtmlParser extends React.Component {

    // Override constructor
    constructor(props) {
        super(props);

        // Binding events
        this.handleTextareaKeyUp = this.keyUpHandler.bind(this, 'htmlInput');
        this.updateAppCls = this.updateAppCls.bind(this);

        // Define initial state
        this.state = {
            jsonifyHtmlDocument: {},
            htmlProcessed: {},
            htmlifyJsonNodes: '',
            appCls: ""
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

    updateAppCls(newCls){
        console.log(this.state.appCls, newCls);
        this.setState({appCls: newCls});
    }

    // Render component
    render() {
      return (
        <div id="appbody" className={this.state.appCls}>
            <div className="row">
                <div className="col-md-4 scrollable-wrapper">
                    <div className="row scrollable">
                        <TOC jsonData={this.state.jsonifyHtmlDocument}/>
                    </div>
                    <div className="row">
                        <AccessibilityControls updateAppCls={this.updateAppCls}/>
                    </div>
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
        </div>
        );
    }
}

export default HtmlParser;