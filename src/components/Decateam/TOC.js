import React   from 'react';
import TOCItem from "./TOCItem";


class TOC extends React.Component {

    constructor(){
        super();
        this.renderItems = this.renderItems.bind(this);
    }

    renderItems(items, level) {
        let response = [];
        for(const i in items)
        {
            let element = items[i];
            if(element.type === "Element")
            {
                if(/^(h\d{1}|p|[dou]l)$/i.test(element.tagName))
                {
                    response.push({type: element.tagName, value: element.innerHtml, level: level, key: ("tocitem-" + level + "-" + i) });
                }
                if(element.children !== undefined || element.children.length > 0)
                {
                    response = response.concat(this.renderItems(element.children, (level + 1)));
                }
            }
        }
        return response;
    }

    render() {
        const tocItems = this.renderItems(this.props.jsonData, 1);

        return (
            <div className="toc">
                <ul>
                    { tocItems.map((item) => <TOCItem itemData={ item } /> )}
                </ul>
            </div>
        );
    }
}

export default TOC