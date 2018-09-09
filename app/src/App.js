import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewStoryApp from "./ViewStoryApp";
import * as actions from "./actions";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Credits from "./pages/Credits";
import Technology from "./pages/Technology";

const ConnectedViewStoryApp = connect(
  state => state,
  {
    onShowProposedStoryPanel: actions.showProposedStoryPanel,
    onAcceptProposedStoryPanel: actions.acceptProposedStoryPanel,
    onRejectProposedStoryPanel: actions.rejectProposedStoryPanel,
    onStart: actions.startStory,
    acceptStoryAction: actions.acceptStoryAction,
    onCloseAddStoryPanel: actions.closeAddStoryPanel,
  }
)(ViewStoryApp);

/**
 * Decides whether to show the story builder or the story itself, based on the "screen" property in our store.
 */
const App = props => (
  <div className="App">
    <Router onUpdate={e => console.log("Change", e)}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/view/:stories" component={ConnectedViewStoryApp} />
        <Route path="/view" component={ConnectedViewStoryApp} />
        <Route path="/all" component={ConnectedViewStoryApp} />
        <Route path="/credits" component={Credits} />
        <Route path="/technology" component={Technology} />
      </Switch>
    </Router>
  </div>
);

export default App;
