import React, { Component } from 'react';

import { addTodo, changeTodoInput, changeSearchInput } from './../actions/todoActions';
import store from '../store/store.js'

class TodoList extends Component {
  constructor(props) {
    super(props);
    let state = store.getState();
    this.state = {
      todos: state.todos.list,
      todoInputText: state.todos.todo,
      searchInputText: state.search
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleTodoInput = this.handleTodoInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    store.subscribe(() => {
      let state = store.getState();
      this.setState({
        todos: state.todos.list,
        todoInputText: state.todos.todo,
        searchInputText: state.search
      })
    })
  }
  handleSearchInput(e) {
    store.dispatch(changeSearchInput(e.target.value))
  }
  handleTodoInput(e) {
    store.dispatch(changeTodoInput(e.target.value))
  }
  handleClick() {
    store.dispatch(addTodo(this.state.todoInputText))
    store.dispatch(changeTodoInput(''))
  }
  render() {
    const todoList = this.state.todos.map((ele, idx) => {
      if (ele.includes(this.state.searchInputText)) {
        return <li key={idx}>{ele}</li>
      }
    })
    return (
      <div>
        <p>Search:</p>
        <input
          type="text"
          value={this.state.searchInputText}
          onChange={this.handleSearchInput}
        />
        <br />
        <p>New Todo:</p>
        <input
          type="text"
          value={this.state.todoInputText}
          onChange={this.handleTodoInput}
        />
        <br />
        <button
          type="button"
          onClick={this.handleClick}
        >
          Add
        </button>
        <ul>{todoList}</ul>
      </div>
    );
  }
}

export default TodoList;