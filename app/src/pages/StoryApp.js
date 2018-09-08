import React from "react";

import ViewStoryApp from "../ViewStoryApp";
import BuildStoryApp from "../BuildStoryApp";
import SwitchButton from "../components/Button";

const StoryApp = props => {
  return (
    <div>
      {props.screen === "view-story" ? (
        <ViewStoryApp {...props.viewStory} />
      ) : (
        <BuildStoryApp {...props.buildStory} />
      )}
      <SwitchButton
        currentScreen={props.screen}
        switchScreen={screen => props.onSwitchScreen(screen)}
      />
    </div>
  );
};

export default StoryApp;
