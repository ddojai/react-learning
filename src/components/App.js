import React, {Component} from 'react';
import PageTemplate from "./PageTemplate/PageTemplate";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";

class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInput/>
        <TodoList/>
      </PageTemplate>
    );
  }
}

export default App;