import { TODO_ADD } from '../types';
import axios from 'axios';

export const saveTodo = (value) => {
  const request = axios.post(`api/todos`, {
    value
  });

  return (dispatch) => {
    request.then(({data}) => {
      console.log(data);
      dispatch({type: TODO_ADD, payload: data});
    })
  }
}


export const fetchTodos = () => {
  const request = axios.get('api/todos');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'FETCH_TODOS', payload: data})
    })
  }
}

export const deleteTodo = (id) => {
  const request = axios.delete(`api/todos/${id}`);

  return (dispatch) => {
    request.then(() => {
      dispatch({type: 'DELETE_TODO', payload: id})
    })
  }
}

export const toggleDone = (id, done) => {
  const request = axios.patch(`api/todos/${id}`, {
    done: !done
  })

  return (dispatch) => {
    request.then(() => {
      dispatch({type: "TOGGLE_DONE", payload: id})
    })
  }
}
