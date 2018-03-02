import React from "react";
import TodoForm from "../todo/TodoForm";
import TodoList from "../todo/TodoList";
import { connect } from "react-redux";
import {
  saveTodo,
  fetchTodos,
  deleteTodo,
  toggleDone
} from "../../actions/todos_actions";

class TodoPage extends React.Component {
  render() {
    const { todos, saveTodo, fetchTodos, deleteTodo, toggleDone } = this.props;

    return (
      <div>
        <TodoForm saveTodo={saveTodo} />
        <TodoList
          todos={todos}
          fetchTodos={fetchTodos}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {
  saveTodo,
  fetchTodos,
  deleteTodo,
  toggleDone
})(TodoPage);
