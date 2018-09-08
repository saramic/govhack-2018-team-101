import storyElementsData from './story_elements'

const defaultState = {

  location: "Kingston",
  character: "Matilda",

  /**
   * storyElements is a directed graph of all the paths a story could potentially take, like a "choose your own adventure".
   *
   * Example story building exercise, to illustrate the data structure below:
   *
   *  - Tinder card is shown with a picture of a soccer ball.
   *  - User accepts the card, and is shown the details: "I was walking past a soccer field, and saw people speaking Italian..."
   *  - User is happy, and then proceeds to add it to the comic strip.
   *  - The comic strip preview now includes a card with:
   *    * A picture of a soccer ball
   *    * The text "I was walking past a soccer field, and saw people speaking Italian..."
   *  - The user adds a new tinder card, and are shown a picture of Carlton Gardens (because that is one potential segue).
   *  - They accept the gardens picture, and so are shown the details "Carlton gardens is great because... blah blah".
   *  - Because they accepted this, we now update the previous card and tell it what the segue is, "A suburb with lots of italians is Carlton, which also has wonderful gardens".
   *  - The comic strip preview now includes the following cards:
   *    * "I was walking past a soccer field, and saw people speaking Italian. A suburb with lots of italians is Carlton, which also has wonderful gardens" (Note the segue is now included).
   *    * "Carlton gardens is great because... blah blah" (Note: No segue included, because we don't know where we are segueing to yet...)
   */
  storyElements: storyElementsData.storyElements,

  /**
   * Test images are from the VisitVictoria open data portal: https://contenthub.visitvictoria.com/.
   */
  storyPanels: [
    {
      id: "school",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "sport-recreation",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "recycling",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "graffiti",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "trees",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "profession",
      panelType: Math.round(Math.random() * 3),
    },
    /*{
      id: "multiculturalism",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "gender-equality",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "indigenous",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "aging",
      panelType: Math.round(Math.random() * 3),
    },*/
    {
      id: "sport-recreation",
      text: "Matilda was walking past a soccer field, and saw people speaking Italian...",
      image: "https://media.graytvinc.com/images/810*539/soccer90.jpg",
      dataSource: "http://data.gov.au",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "sport-recreation",
      text: "Kingston has heaps of grown ups to look after us.",
      image:
        "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg",
      dataSource: "http://data.gov.au",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "sport-recreation",
      text: "Before Kingston was Kingston, it was known as Bootowa. Instead of English they spoke ...",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Aboriginal_Art_Australia%281%29.jpg/1280px-Aboriginal_Art_Australia%281%29.jpg",
      dataSource: "http://data.vic.gov.au",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "sport-recreation",
      text: "It is a council (I think?)",
      image:
        "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000057/118939l.jpg",
      dataSource: "http://kingston.gov.au",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "sport-recreation",
      text: "There are people there",
      image:
        "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000057/118933l.jpg",
      dataSource: "http://google.com",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "sport-recreation",
      text: "Kingston has heaps of grown ups to look after us.",
      image:
        "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg",
      dataSource: "http://data.gov.au",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "sport-recreation",
      text: "Before Kingston was Kingston, it was known as Bootowa. Instead of English they spoke ...",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Aboriginal_Art_Australia%281%29.jpg/1280px-Aboriginal_Art_Australia%281%29.jpg",
      dataSource: "http://data.vic.gov.au",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "sport-recreation",
      text: "It is a council (I think?)",
      image:
        "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000057/118939l.jpg",
      dataSource: "http://kingston.gov.au",
      panelType: Math.round(Math.random() * 3),
    },
   ]
};

const reducer = (state = defaultState, action) => {
  if (action.type === "SHOW_PROPOSED_STORY_PANEL") {
    // const lastStoryItem = state.storyPanels.length === 0 ? null : state.storyPanels[state.storyPanels.length - 1];
    // const potentialNextStories = lastStoryItem === null ? state.storyElements :

    const newElement = state.storyElements[parseInt(Math.random() * (state.storyElements.length - 1), 10)];
    const newPanel = Object.assign({}, newElement, {panelType: Math.round(Math.random() * 3)});

    return Object.assign({}, state, {
      storyPanels: state.storyPanels.concat(newPanel)
    });
  }
  if (action.type === 'ACCEPT_STORY') {
    const storyPanel = state.storyElements.filter((storyElement) => (storyElement.id === action.id))[0]
    const newStoryPanel = {
      id: storyPanel.id,
      panelType: 2,
    }
    const stories = state.storyPanels.concat(newStoryPanel);
    return Object.assign({}, state, {
      storyPanels: stories
    });
  }
  return state;
};

export default reducer;
