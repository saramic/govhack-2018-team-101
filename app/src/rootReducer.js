const defaultState = {
  screen: "view-story" /* or 'build-story' */,
  buildStory: {
    newStories: [
      // TODO this is the thing that needs to be auto generated
      "Park bench",
      "Train Station",
      "Park",
      "Someone speaking Italian",
      "It started to rain"
    ],
    stories: [
      "I start at my school Collingwood College",
      "I decide to go to the near by park",
      "I find a park bench so I take a seat and read my book",
      "I hear some kids playing soccer and they are talking Polish",
      "I follow their language and it takes me to Glen Eira, the biggest grouping of people who speak Polish"
    ]
  },
  viewStory: {
    location: "Kingston",
    facts: [
      {
        label: "It's great",
        dataSource: "http://data.gov.au"
      },
      {
        label: "It's okay...",
        dataSource: "http://data.vic.gov.au"
      },
      {
        label: "It is a council (I think?)",
        dataSource: "http://kingston.gov.au"
      },
      {
        label: "There are people there",
        dataSource: "http://google.com"
      }
    ]
  }
};

const reducer = (state = defaultState, action) => {
  if (action.type === "SWITCH_SCREEN") {
    return Object.assign({}, state, { screen: action.screen });
  }
  return state;
};

export default reducer;
