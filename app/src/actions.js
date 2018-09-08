export const switchScreen = nextScreen => {
  console.log(nextScreen);
  return { type: "SWITCH_SCREEN", screen: nextScreen };
};
