import React, { Component } from 'react';
import MyFirstComponent from './MyFirstComponent';

class MyFirstClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            todos: [],
            isClicked: false
        };
    }

        onChange = e => {
            this.setState({
                text: e.target.value
            })
        };

        render() {
            return (
                <div>
                    <h1>Input Text Below</h1>
                    <input value={this.state.text} onChange={this.onChange} />
                    <MyFirstComponent wasClicked={this.state.isClicked} />
                </div>
            )
        }
    }

export default MyFirstClassComponent