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
        console.log(props);
        this.jsonData = props.jsonData;
        // Binding events
        this.handleTextareaKeyUp = this.keyUpHandler.bind(this, 'htmlInput');
        this.updateAppCls = this.updateAppCls.bind(this);

        // Define initial state
        this.state = {
            jsonifyHtmlDocument: this.jsonData,
            htmlifyJsonNodes: toHTML(this.jsonData)
            appCls: ""
        };
        
    }

    // Load HTML from textarea
    keyUpHandler(refName, e) {
        let jsonData;
        if(e.target.value !== "") {
           jsonData = {jsonData :{ children: himalaya.parse(e.target.value) }}
           console.log(jsonData);
        } else {
            jsonData = this.jsonData;
        }
        
        let htmlifyJson = toHTML(jsonData);

        this.setState({
            jsonifyHtmlDocument: jsonData,
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
            <ReaderVoice jsonData={this.state.jsonifyHtmlDocument} />
            <div className="col-md-8">
                <div className="input">
                    <textarea id="source" onKeyUp={this.handleTextareaKeyUp} ref="htmlInput" placeholder="HTML a charger"></textarea>
                </div>
                <div className="output">
                    <div className="container" dangerouslySetInnerHTML={{__html: this.state.htmlifyJsonNodes}}></div>
                </div>
            </div>
        </div>
        );
    }
}

export default HtmlParser;