import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';

export default class Person extends Component {

    constructor() {
        super();
        this.state = {
            value: null
        };
    }

    toggle() {
        this.setState({disabled: !this.state.disabled});
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="person">
                <span className="p-float-label">
                    <InputText id="in" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
                    <label htmlFor="in">Username</label>
                </span>
            </div>
        );
    }
}