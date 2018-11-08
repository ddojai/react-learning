import React, {Component} from 'react';
import PageTemplate from "./PageTemplate/PageTemplate";
import TodoInput from "./TodoInput/TodoInput";

class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInput/>
      </PageTemplate>
    );
  }
}

export default App;