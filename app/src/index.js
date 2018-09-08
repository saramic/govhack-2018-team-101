import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";
import { Provider, connect } from "react-redux";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./rootReducer";
import App from "./App";
import * as actions from "./actions";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});

const ConnectedApp = connect(
  state => state,
  bindActionCreators(
    {
      onSwitchScreen: screen => actions.switchScreen(screen)
    },
    store.dispatch
  )
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
