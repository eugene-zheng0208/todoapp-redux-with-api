import React from "react";
import { Form, Input } from "semantic-ui-react";
import PropTypes from 'prop-types';
import ErrorMessage from '../messages/ErrorMessage';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        value: ""
      },
      errors: {},
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ data: { value: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    if (Object.keys(errors).length === 0) {
      this.setState({ data: { value: '' }, loading: true });
      this.props.saveTodo(this.state.data.value)
      this.setState({loading: false})
    } else {
      this.setState({errors})
    }
  }

  validate(data) {
    const errors = {};
    if (!data.value) errors.value = "Nazwa nie może być pusta";
    return errors;
  }

  render() {
    const { errors, loading, data } = this.state;

    return (
      <Form loading={loading} size="huge" onSubmit={this.handleSubmit}>
        <Form.Field error={!!errors.value}>
          <Input
            placeholder="Todo name..."
            action="Add"
            value={data.value}
            onChange={this.handleChange}
          />
          {errors.value && <ErrorMessage text={errors.value} />}
        </Form.Field>
      </Form>
    );
  }
}

TodoForm.propTypes = {
  saveTodo: PropTypes.func.isRequired,
};

export default TodoForm;
