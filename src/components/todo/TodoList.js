import React from "react";
import { List, Segment } from "semantic-ui-react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, deleteTodo, toggleDone } = this.props;
    const renderTodos = todos.map(todo => (

      <TodoItem
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
        id={todo._id}
        value={todo.value}
        done={todo.done}
        key={todo._id}
      />
    ));

    return (
      <Segment raised>
        <List size="huge" animated divided>
          {renderTodos}
        </List>
      </Segment>
    );
  }
}

export default TodoList;
