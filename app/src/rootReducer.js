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
    character: "Matilda",

    /**
     * Test images are from the VisitVictoria open data portal: https://contenthub.visitvictoria.com/.
     */
    storyPanels: [
      {
        text: "Kingston has heaps of grown ups to look after us.",
        image:
          "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg",
        dataSource: "http://data.gov.au",
        panelType: Math.round(Math.random() * 3),
      },
      {
        text: "Before Kingston was Kingston, it was known as Bootowa. Instead of English they spoke ...",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Aboriginal_Art_Australia%281%29.jpg/1280px-Aboriginal_Art_Australia%281%29.jpg",
        dataSource: "http://data.vic.gov.au",
        panelType: Math.round(Math.random() * 3),
      },
      {
        text: "It is a council (I think?)",
        image:
          "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000057/118939l.jpg",
        dataSource: "http://kingston.gov.au",
        panelType: Math.round(Math.random() * 3),
      },
      {
        text: "There are people there",
        image:
          "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000057/118933l.jpg",
        dataSource: "http://google.com",
        panelType: Math.round(Math.random() * 3),
      },
      {
        text: "Kingston has heaps of grown ups to look after us.",
        image:
          "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg",
        dataSource: "http://data.gov.au",
        panelType: Math.round(Math.random() * 3),
      },
      {
        text: "Before Kingston was Kingston, it was known as Bootowa. Instead of English they spoke ...",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Aboriginal_Art_Australia%281%29.jpg/1280px-Aboriginal_Art_Australia%281%29.jpg",
        dataSource: "http://data.vic.gov.au",
        panelType: Math.round(Math.random() * 3),
      },
      {
        text: "It is a council (I think?)",
        image:
          "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000057/118939l.jpg",
        dataSource: "http://kingston.gov.au",
        panelType: Math.round(Math.random() * 3),
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
