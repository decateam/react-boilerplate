import React from 'react';


class HtmlReader extends React.Component {
    constructor() {
        super();
        this.readText = this.readText.bind(this);
    }
    
    readText(data) {
        
    }
    
    processElems(elems){
        var self = this;
        var processedData;
        
        elems.forEach(function(elem){
            processedData += self.processElem(elem);
        });
        
        
        return processedData;
    }
    
    processElem(elem){
        if(elem.type === "Element") {
            console.log(elem);
            if(elem.children && elem.children.length > 0) {
                return <div className={ elem.tagName } >{ this.processElems(elem.children) }</div>;
            } else {
                return <div className={ elem.tagName } ></div>;
            }
        } 
        else if (elem.type === "Text") {
            console.log(elem);
            return elem.content;
        }
        
    }
    
    render() {
        var data = this.props.jsonData;
        
        console.log(data);
        return (            
                <div>{ this.processElem(data[2].children[3]) }</div>
        )
    }
};

export default HtmlReader;
