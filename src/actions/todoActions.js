export const ADD_TODO = 'ADD_TODO';
export const RESET_TODO = 'RESET_TODO';
export const CHANGE_TODO_INPUT = 'CHANGE_TODO_INPUT';
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT';

export function addTodo(text) {
  return function (dispatch, getState) {
    // console.log(getState())
    setTimeout(() => {
      dispatch({ type: ADD_TODO, text })
    }, 2000)

  }
}

export function resetTodo() {
  return {
    type: RESET_TODO
  }
}

export function changeTodoInput(text) {
  return {
    type: CHANGE_TODO_INPUT,
    text
  }
}

export function changeSearchInput(text) {
  return {
    type: CHANGE_SEARCH_INPUT,
    text
  }
}