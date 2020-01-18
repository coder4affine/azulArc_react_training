import React, { PureComponent } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

export default class index extends PureComponent {
  state = {
    todoList: [],
  };

  onAddTodo = todo => {
    const { todoList } = this.state;
    this.setState({
      todoList: [...todoList, { id: new Date().getUTCMilliseconds(), text: todo, isDone: false }],
    });
  };

  onChecked = item => {
    const { todoList } = this.state;
    const i = todoList.findIndex(x => x.id === item.id);
    const newTodoList = [
      ...todoList.slice(0, i),
      { ...item, isDone: !item.isDone },
      ...todoList.slice(i + 1),
    ];
    this.setState({ todoList: newTodoList });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>Todo Application</h1>
        <TodoForm onAddTodo={this.onAddTodo} />
        <TodoList todoList={todoList} onChecked={this.onChecked} />
        <TodoFooter />
      </div>
    );
  }
}
