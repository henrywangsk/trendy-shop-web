import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const devtools =
  process.env.NODE_ENV === 'test'
    ? x => x
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__();

export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      devtools
    )
  );

  store.subscribe(() => {
    const { cart, total } = store.getState();
    const persist = { cart, total };
    window.localStorage.setItem('state', JSON.stringify(persist));
  });

  return store;
};
