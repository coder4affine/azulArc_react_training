import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TodoForm extends PureComponent {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
  };

  state = {
    todo: '',
    error: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
  };

  addTodo = e => {
    e.preventDefault();
    const { todo } = this.state;
    if (todo) {
      this.setState({ todo: '', error: '' }, () => {
        const { onAddTodo } = this.props;
        onAddTodo(todo);
      });
    } else {
      this.setState({ error: 'Todo Required...' });
    }
  };

  render() {
    console.log('TodoForm');
    const { todo, error } = this.state;
    return (
      <form onSubmit={this.addTodo}>
        <input
          name="todo"
          type="text"
          placeholder="Write your todo here..."
          value={todo}
          onChange={this.onChange}
        />

        <button type="submit">Add Todo</button>
        {error && <div>{error}</div>}
      </form>
    );
  }
}

export default TodoForm;
