const defaultState = {
  screen: "view-story" /* or 'build-story' */,
  buildStory: {
    availableStoryPanels: [
      {
        template: "[LOCATION] has heaps of grown ups to look after us.",
        image:
            "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg",
        dataSource: "http://data.gov.au",
      },
      {
        text: "Before [LOCATION] was [LOCATION], it was known as [INDIGENOUS_LOCATION]. Instead of English they spoke [INDIGENOUS_LANGUAGE]",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Aboriginal_Art_Australia%281%29.jpg/1280px-Aboriginal_Art_Australia%281%29.jpg",
        dataSource: "http://data.vic.gov.au",
        panelType: Math.round(Math.random() * 3),
      },
      {
        template: "[LOCATION] has heaps of grown ups to look after us.",
        image:
            "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg",
        dataSource: "http://data.gov.au",
      },
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
