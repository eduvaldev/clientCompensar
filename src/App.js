import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { TrackedRoute } from './components/TrackedRoute';
import IndexReducer from './redux/index-reducer';
import IndexSagas from './redux/index-sagas';
import routes from './routes';

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  IndexReducer,
  composeSetup(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(IndexSagas);

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {routes.map(((route) => (
          <TrackedRoute
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        )))}
      </Switch>
    </Router>
  </Provider>
);

export default App;
