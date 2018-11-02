import * as React from 'react';
import CounterContainer from "./components/CounterContainer";
import Profile from "./components/Profile";
import TodoListContainer from "./components/TodoListContainer";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile
          name="벨로퍼트"
          job="코드사랑꾼"
        />
        <CounterContainer/>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;
