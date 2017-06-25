import React   from 'react';
import {Checkbox} from 'react-bootstrap';


class AccessibilityControls extends React.Component {

    constructor(){
        super();
        this.state = { accessible: false, colorScheme: "default"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.setState({
          accessible: this.refs.accessible.state.checked
        });
        console.log(this.state);
    }

    render() {
        return (
            <Checkbox onChange={this.handleChange} ref="accessible">
                Checkbox
            </Checkbox>
        )
    }

}

export default AccessibilityControls;