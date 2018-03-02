import React from "react";
import { List, Button, Checkbox, Grid } from "semantic-ui-react";

const TodoItem = props => (
  <List.Item>
    {props.value}
    <List.Content floated="right">
      <Checkbox
        checked={props.done}
        onChange={() => props.toggleDone(props.id, props.done)}
        style={{ "marginRight": "25px" }}
      />
      <Button
        onClick={() => props.deleteTodo(props.id)}
        content="Usuń"
        color="red"
      />
    </List.Content>
  </List.Item>
);

export default TodoItem;
