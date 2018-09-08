import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ViewStoryApp from "./ViewStoryApp";
import * as actions from "./actions";
import { connect } from "react-redux";
import Home from "./pages/Home";

const ConnectedViewStoryApp = connect(
  state => state.viewStory,
  {
    onShowProposedStoryPanel: actions.showProposedStoryPanel
  }
)(ViewStoryApp);

/**
 * Decides whether to show the story builder or the story itself, based on the "screen" property in our store.
 */
const App = props => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/view" component={ConnectedViewStoryApp} />
      </Switch>
    </Router>
  </div>
);

export default App;
