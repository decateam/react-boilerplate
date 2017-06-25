import React   from 'react';
import {Form, FormGroup, FormControl, Checkbox, Col, ControlLabel} from 'react-bootstrap';


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
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={6}>
                        Accessible Mode
                    </Col>
                    <Col sm={6}>
                        <Checkbox onChange={this.handleChange} ref="accessible" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={6}>
                        Color Scheme
                    </Col>
                    <Col sm={6}>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="">Default</option>
                            <option value="white-on-black">White on Black text</option>
                            <option value="yellow-on-black">Yellow on Black text</option>
                            <option value="white-on-blue">White on Blue text</option>
                        </FormControl>
                    </Col>
                </FormGroup>
            </Form>
        )
    }

}

export default AccessibilityControls;