const { createStore, applyMiddleware } = Redux;
const thunk = ReduxThunk.default;
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, createLogger())
  );

  return store;
}