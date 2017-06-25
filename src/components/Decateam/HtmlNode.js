import React, { Component, PropTypes } from 'react'

export default class HtmlNode extends React.Component {

    // Override constructor
    constructor() {
        super();

        // Define initial state
        this.state = {
            baliseType: '',
            baliseContent: ''
        };
    }

    render() {

        const { children } = this.props

        return (
            <div className="comments">
                {Object.keys(children).map(comment =>
                    <div key={comment.id} className="comment">
                        <span>{comment.content}</span>
                        {comment.children && <HtmlNode children={comment.children}/>}
                    </div>
                )}
            </div>
        )

    }
}

HtmlNode.propTypes = {
  children: PropTypes.array.isRequired
}