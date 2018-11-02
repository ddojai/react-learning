import * as React from 'react';
import CounterContainer from "./components/CounterContainer";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile
          name="벨로퍼트"
          job="코드사랑꾼"
        />
        <CounterContainer/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
