import React, { PureComponent } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

const url = 'http://localhost:3004/todoList';

export default class index extends PureComponent {
  state = {
    todoList: [],
    status: 'all',
    error: false,
  };

  componentDidMount() {
    this.getTodoList();
  }

  getTodoList = async () => {
    try {
      const res = await fetch(url);
      const todoList = await res.json();
      this.setState({ todoList });
    } catch (error) {
      this.setState({ error });
    }
  };

  onAddTodo = async todo => {
    try {
      const { todoList } = this.state;
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ text: todo, isDone: false }),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      });
      const todoItem = await res.json();
      this.setState({
        todoList: [...todoList, todoItem],
        status: 'all',
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  onChecked = async item => {
    try {
      const res = await fetch(`${url}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      });
      const todoItem = await res.json();

      const { todoList } = this.state;
      const i = todoList.findIndex(x => x.id === item.id);
      const newTodoList = [...todoList.slice(0, i), todoItem, ...todoList.slice(i + 1)];
      this.setState({ todoList: newTodoList });
    } catch (error) {
      this.setState({ error });
    }
  };

  onDelete = async item => {
    try {
      await fetch(`${url}/${item.id}`, {
        method: 'DELETE',
      });
      const { todoList } = this.state;
      const newTodoList = todoList.filter(x => x.id !== item.id);
      this.setState({ todoList: newTodoList });
    } catch (error) {
      this.setState({ error });
    }
  };

  switchList = status => {
    this.setState({ status });
  };

  render() {
    const { todoList, status, error } = this.state;
    const filteredList = todoList.filter(x => {
      switch (status) {
        case 'pending':
          return x.isDone === false;
        case 'completed':
          return x.isDone === true;

        default:
          return true;
      }
    });

    return (
      <div>
        <h1>Todo Application</h1>
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
        <TodoForm onAddTodo={this.onAddTodo} />
        <TodoList todoList={filteredList} onChecked={this.onChecked} onDelete={this.onDelete} />
        <TodoFooter switchList={this.switchList} />
      </div>
    );
  }
}
