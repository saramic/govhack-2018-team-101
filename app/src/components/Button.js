import React from "react";

const Button = ({ currentScreen, switchScreen }) => {
  const building = currentScreen === "build-story";
  return (
    <div>
      <p>{currentScreen}</p>
      <button
        onClick={() => {
          building ? switchScreen("view-story") : switchScreen("build-story");
        }}
      >
        Switch to {building ? "View" : "Build"}
      </button>
      ;
    </div>
  );
};

export default Button;
