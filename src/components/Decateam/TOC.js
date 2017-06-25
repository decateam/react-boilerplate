import React   from 'react';
import TOCItem from "./TOCItem";


class TOC extends React.Component {

    constructor(){
        super();
        this.processItems = this.processItems.bind(this);
    }

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

    processItem(item, existing){
        let response = {
            type: item.tagName
        };

        let firstChild
        do {
            firstChild = item.children[0];
            response.value = firstChild.content;
        } while (firstChild.type !== "Text");

        if(/^h\d{1}$/i.test(item.tagName)){
            response.level = item.tagName.slice(-1);
        }
        else if(/^h\d{1}$/i.test(existing.slice(-1).pop().type)){
            response.level = parseInt(existing.slice(-1).pop().level, 10) + 1;
        }
        else{
            response.level = existing.slice(-1).pop().level;
        }
        return response;
    }

    render() {
        const tocItems = this.processItems(this.props.jsonData, []);

        return (
            <div id="toc">
                { tocItems.map((item, index) => <TOCItem itemData={ item } key={"tocitem-" + (index+1) } /> )}
            </div>
        );
    }
}

export default TOC