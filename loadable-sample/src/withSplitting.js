import React, {Component} from 'react';
import SplitMe from "./SplitMe";

const withSplitting = getComponent => {
  // 여기서 getComponent 는 () => import('./SplitMe') 의 형태로 함수가 전달되야 합니다.
  class WithSplitting extends Component {
    static Splitted = null;  // 기본값은 null 이지만
    static preload() {
      // preload 가 호출되면 위 static Splitted 가 설정되고
      getComponent().then(({default: Splitted}) => {
        WithSplitting.Splitted = Splitted;
      });
    }
    state = {
      Splitted: WithSplitting.Splitted
    };

    constructor(props) {
      super(props);
      getComponent().then(({default: Splitted}) => {
        this.setState({
          Splitted
        });
      });
    }

    render() {
      const {Splitted} = this.state;
      if (!Splitted) {
        return null;
      }
      return <Splitted {...this.props}/>;
    }
  }

  return WithSplitting;
};

export default withSplitting;