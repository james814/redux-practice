import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addTodo, resetTodo, changeTodoInput, changeSearchInput } from './../actions/todoActions';

class TodoList extends Component {
  render() {
    const {
      todos,
      searchInputText,
      todoInputText,
      handleSearchInput,
      handleTodoInput,
      handleAddClick,
      handleResetClick
    } = this.props
    const todoList = todos.map((ele, idx) => {
      if (ele.includes(searchInputText)) {
        return <li key={idx}>{ele}</li>
      }
    })
    return (
      <div>
        <p>Search:</p>
        <input
          type="text"
          value={searchInputText}
          onChange={(e) => handleSearchInput(e.target.value)}
        />
        <br />
        <p>New Todo:</p>
        <input
          type="text"
          value={todoInputText}
          onChange={(e) => handleTodoInput(e.target.value)}
        />
        <br />
        <button
          type="button"
          onClick={() => handleAddClick(todoInputText)}
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => handleResetClick()}
        >
          Reset
        </button>
        <ul>{todoList}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.list,
    todoInputText: state.todos.todo,
    searchInputText: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInput: (text) => {
      dispatch(changeSearchInput(text))
    },
    handleTodoInput: (text) => {
      dispatch(changeTodoInput(text))
    },
    handleAddClick: (text) => {
      dispatch(addTodo(text))
      dispatch(changeTodoInput(''))
    },
    handleResetClick: () => {
      dispatch(resetTodo())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);