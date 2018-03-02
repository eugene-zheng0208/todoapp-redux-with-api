import shortid from 'shortid';
import { TODO_ADD } from '../types';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];
    case 'FETCH_TODOS':
      return [...state, ...action.payload];
    case 'DELETE_TODO':
      const todosLeft = state.filter(todo => todo._id !== action.payload);
      return [...todosLeft];
    case "TOGGLE_DONE":
      const newState = state.map( todo =>
        (todo._id === action.payload) ?
        {...todo, done: !todo.done} :
        todo )
      return [
        ...newState
      ]
    default: return state;
  }
}
