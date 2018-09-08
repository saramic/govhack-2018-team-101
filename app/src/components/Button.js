import React from "react";
import { Button } from "antd";

const SwitchButton = ({ currentScreen, switchScreen }) => {
  const building = currentScreen === "build-story";
  return (
    <div>
      <p>{currentScreen}</p>
      <Button
        type="primary"
        onClick={() => {
          building ? switchScreen("view-story") : switchScreen("build-story");
        }}
      >
        Switch to {building ? "View" : "Build"}
      </Button>
    </div>
  );
};

export default SwitchButton;
