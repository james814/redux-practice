import {
  ADD_TODO,
  CHANGE_TODO_INPUT
} from '../actions/todoActions';

const initialState = {
  todo: '',
  list: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.text]
      }

    case CHANGE_TODO_INPUT:
      return {
        ...state,
        todo: action.text
      }

    default:
      return state;
  }
}

export default todos;