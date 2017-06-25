import React   from 'react';
import {Form, FormGroup, FormControl, Checkbox, Col, ControlLabel} from 'react-bootstrap';


class AccessibilityControls extends React.Component {

    constructor(){
        super();
        this.state = { accessible: false, colorScheme: "" };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleComboChange = this.handleComboChange.bind(this);
        this.applyState = this.applyState.bind(this);
    }

    handleCheckboxChange(e){
        this.setState({
          accessible: !this.state.accessible
        });
        this.applyState();
    }

    handleComboChange(e){
        this.setState({
          colorScheme: e.target.value
        });
        this.applyState();
    }

    applyState(){
        let cls = [];
        if(this.state.accessible === true){
            cls.push('accessible');
        }
        if(this.state.colorScheme !== ""){
            cls.push(this.state.colorScheme);
        }
        this.props.updateAppCls(cls.join(' '));
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={6}>
                        Accessible Mode
                    </Col>
                    <Col sm={6}>
                        <Checkbox onChange={this.handleCheckboxChange} ref="accessible" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={6}>
                        Color Scheme
                    </Col>
                    <Col sm={6}>
                        <FormControl onChange={this.handleComboChange} componentClass="select" placeholder="select" ref="colorScheme">
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