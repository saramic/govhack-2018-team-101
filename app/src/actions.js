export const showProposedStoryPanel = () => {
  return { type: "SHOW_PROPOSED_STORY_PANEL" };
};

export const rejectProposedStoryPanel = () => {
  return { type: "REJECT_PROPOSED_STORY_PANEL" };
};

export const acceptProposedStoryPanel = () => {
  return { type: "ACCEPT_PROPOSED_STORY_PANEL" };
};

export const acceptStoryAction = id => {
  return { type: "ACCEPT_STORY", id: id };
};

export const startStory = serializedStory => {
  return { type: "START_STORY", serializedStory };
};
