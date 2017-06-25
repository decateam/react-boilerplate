import React   from 'react';

class TOCItem extends React.Component {

    ellipsis(text, wordCount){
        return text.split(" ").slice(0, wordCount).join(' ') + (text.split(" ").length > wordCount ? " ..." : "");
    }

    render() {
        let content,
            cls = "col-md-"+(13 - this.props.itemData.level)+" col-md-offset-"+(this.props.itemData.level - 1);
        if(/^h\d{1}$/i.test(this.props.itemData.type)){
            content = (
                <div className={ cls }>
                    <span className="toc-text-title">{ this.ellipsis(this.props.itemData.value, 5) }</span>
                </div>
            )
        }
        else if(this.props.itemData.type === "p"){
            content = (
                <div className={ cls }>
                    <span className="toc-text-paragraph">&sect;&nbsp;{ this.ellipsis(this.props.itemData.value, 5) }</span>
                </div>
            )
        }
        else if(/^[dou]l$/i.test(this.props.itemData.type)){
            content = (
                <div className={ cls }>
                    <span className="toc-text-list">Liste</span>
                </div>
            )
        }
        else{
            content = (
                <div className={ cls }>
                    <span className="toc-text-other">?</span>
                </div>
            )
        }

        return (
            <div className={"row toc-item toc-level-"+this.props.itemData.level} key={ this.props.itemData.key }>
                { content }
            </div>
        )
    }

}

export default TOCItem