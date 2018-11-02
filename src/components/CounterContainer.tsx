import Counter from 'components/Counter';
import * as React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {StoreState} from "store/modules";
import {actionCreators as counterActions} from "store/modules/counter";

type Props = {
  value: number;
  CounterActions: typeof counterActions;
}

class CounterContainer extends React.Component<Props> {
  onIncrement = () => {
    const {CounterActions} = this.props;
    CounterActions.increment();
  };
  onDecrement = () => {
    const {CounterActions} = this.props;
    CounterActions.decrement();
  };

  render() {
    const {onIncrement, onDecrement} = this;
    const {value} = this.props;
    return (
      <Counter
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        value={value}
      />
    );
  }
}

export default connect(
  ({counter}: StoreState) => ({
    value: counter.value
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);