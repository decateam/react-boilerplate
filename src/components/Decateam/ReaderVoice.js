import React from 'react';


class ReaderVoice extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        };
        //this.readText = this.readText.bind(this);
    }
    
    readText( json ) {
        console.log(json);
        return json;
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
            
        } 
        else if (elem.type === "Text") {
            
        }
        
    }
    
    render() {
        return <div>
            <button>play</button>
            <button>pause</button>
            <button>stop</button>
        </div>;
    }
};

export default ReaderVoice;