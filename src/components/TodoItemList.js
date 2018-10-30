import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const {todos, onToggle, onRemove} = this.props;

    const todoList = todos.map(
      ({id, text, checked, fontColor}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          color={fontColor}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    )
  }
}

export default TodoItemList;