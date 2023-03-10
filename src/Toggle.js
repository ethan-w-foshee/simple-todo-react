import React, { Component } from "react";

class ToggleClass extends Component {
    constructor() {
        super();
        this.state = {
            isClicked: false,
            todos: [],
            text: ''
        };
    }

    onClickHandler() {
        const todos = this.state.todos.slice();
        todos.push(this.state.text);

        this.setState({
            ...this.state,
            isClicked: !this.state.isClicked,
            todos,
            text: ''
        })
    }

    deleteTodo(index) {
        this.setState({
            ...this.state,
            todos: this.state.todos.filter((todo, ind) => ind !== index)
        })
    }

    onChangeHandler(e) {
        this.setState({
            ...this.state,
            text: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={(e) => this.onChangeHandler(e)} type="text" name="text" />
                </form>
                <button onClick={() => this.onClickHandler()}>
                    Click To Add!
                </button>
                {!!this.state.todos.length && this.state.todos.map((todo, index) => (
                        <p key={index}>{todo}<button onClick={() => this.deleteTodo(index)}>Delete</button></p>
                ))}
            </div>
        )
    }
}

export default ToggleClass