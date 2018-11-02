import TodoList from 'components/TodoList';
import { List } from 'immutable';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from 'store/modules';
import {
  actionCreators as todosActions,
  TodoItemData
} from 'store/modules/todos';

interface Props {
  todoItems: List<TodoItemData>;
  input: string;
  TodosActions: typeof todosActions;
}

class TodoListContainer extends React.Component<Props> {
  onCreate = () => {
    const { TodosActions, input } = this.props;
    TodosActions.create(input);
  };
  onRemove = (id: number) => {
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  };
  onToggle = (id: number) => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  };
  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const { TodosActions } = this.props;
    TodosActions.changeInput(value);
  };
  render() {
    const { input, todoItems } = this.props;
    const { onCreate, onRemove, onToggle, onChange } = this;

    return (
      <TodoList
        input={input}
        todoItems={todoItems}
        onCreate={onCreate}
        onRemove={onRemove}
        onToggle={onToggle}
        onChange={onChange}
      />
    );
  }
}

export default connect(
  ({ todos }: StoreState) => ({
    input: todos.input,
    todoItems: todos.todoItems,
  }),
  (dispatch) => ({
    TodosActions: bindActionCreators(todosActions, dispatch),
  })
)(TodoListContainer);