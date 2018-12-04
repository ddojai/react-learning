import {createStore} from 'redux';
import modules from './modules';

export default function configureStore() {
  return createStore(
    modules,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).____REDUX_DEVTOOLS_EXTENSION__()
  );
}