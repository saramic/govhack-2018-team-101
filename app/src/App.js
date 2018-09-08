import React from "react";
import ViewStoryApp from "./ViewStoryApp";
import BuildStoryApp from "./BuildStoryApp";
import Button from "./components/Button";

/**
 * Decides whether to show the story builder or the story itself, based on the "screen" property in our store.
 */
const App = props => (
  <div className="App">
    {props.screen === "view-story" ? (
      <ViewStoryApp {...props.viewStory} />
    ) : (
      <BuildStoryApp {...props.buildStory} />
    )}

    <Button
      currentScreen={props.screen}
      switchScreen={screen => props.onSwitchScreen(screen)}
    />
  </div>
);

export default App;
