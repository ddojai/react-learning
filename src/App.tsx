import * as React from 'react';

import Counter from "./components/Counter";
import Profile from "./components/Profile";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile
          name="벨로퍼트"
          job="코드사랑꾼"
        />
        <Counter counter={0}/>
      </div>
    );
  }
}

export default App;
