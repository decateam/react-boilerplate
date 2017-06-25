import React   from 'react';
import TOCItem from "./TOCItem";


class TOC extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            jsonData: this.props.jsonData
        };
        
        this.processItems = this.processItems.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({jsonData: nextProps});
    }

    /**
     * Recursive function to process the JSON made by Himalaya from the HTML document
     * @param {array} items    Array fo DOMElements to process
     * @param {array} existing List of elements already processed
     * return {array} List of processed elements
     */
    processItems(items, existing) {
        let response = [];
        for(const i in items)
        {
            let element = items[i];
            if(element.type === "Element")
            {
                if(/^(h\d{1}|p|[dou]l)$/i.test(element.tagName))
                {
                    response.push(this.processItem(element, existing.concat(response)));
                }
                if(element.children !== undefined || element.children.length > 0)
                {
                    response = response.concat(this.processItems(element.children, existing.concat(response)));
                }
            }
        }
        return response;
    }

    /**
     * Function designed to extract information from a DOMElement object to build an entry in the TOC
     * @param  {object} item     A DOMElement to process
     * @param  {array}  existing List of elements already processed
     * @return {array}  the processed DOMElement
     */
    processItem(item, existing){
        let response = {
            type: item.tagName
        };

        let firstChild;
        do {
            firstChild = item.children[0];
            response.value = firstChild.content;
        } while (firstChild.type !== "Text");

        // If tag is a Hn, the level is the one of the H
        if(/^h\d{1}$/i.test(item.tagName)){
            response.level = item.tagName.slice(-1);
        }
        // Else if the last element in the 'existing' array is a Hn, the level is the one of the H + 1
        else if(/^h\d{1}$/i.test(existing.slice(-1).pop().type)){
            response.level = parseInt(existing.slice(-1).pop().level, 10) + 1;
        }
        // Else we have the same level as the previous item
        else{
            response.level = existing.slice(-1).pop().level;
        }
        return response;
    }

    render() {
        const tocItems = this.processItems(this.state.jsonData, []);

        return (
            <div className="toc col-md-12">
                { tocItems.map((item, index) => <TOCItem itemData={ item } key={"tocitem-" + (index+1) } /> )}
            </div>
        );
    }
}

export default TOC