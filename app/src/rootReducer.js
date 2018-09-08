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
  storyElements: [
    {
      id: "italian-soccer",
      text: "I was walking past a soccer field, and saw people speaking Italian...",
      image: "https://media.graytvinc.com/images/810*539/soccer90.jpg",
      dataSource: "http://data.gov.au",
      nextElements: {
        "carlton-gardens": "A suburb with lots of Italians is Carlton, which also has wonderful gardens",
        "soccer-fields": "That reminded me of the place with the most soccer fields in Melbourne - Berwick.",
      },
    },
    {
      id: "carlton-gardens",
      text: "Carlton gardens is one of the best ... blah blah.",
      image: "https://whatson.melbourne.vic.gov.au/Placestogo/ParksandGardens/AllParksandGardens/PublishingImages/14446Large.jpg",
      dataSource: "http://data.vic.gov.au",
      nextElements: {},
    },
    {
      id: "soccer-fields",
      text: "So many soccer fields...",
      image: "https://media.graytvinc.com/images/810*539/soccer90.jpg",
      dataSource: "",
      nextElements: {},
    },
    {
      id: "philip-island-penguins",
      text: "Penguin parade!",
      image: "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg",
      dataSource: "http://data.vic.gov.au",
      nextElements: {
        "philip-island-seals": "Philip island doesn't just have penguins, it also has seals!",
      },
    },
    {
      id: "aboriginal-heritage",
      text: "Before Kingston was Kingston, it was known as Bootowa. Instead of English they spoke ...",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Aboriginal_Art_Australia%281%29.jpg/1280px-Aboriginal_Art_Australia%281%29.jpg",
      dataSource: "http://data.vic.gov.au",
      nextElements: {},
    },
    {
      id: "philip-island-seals",
      text: "Seals on the island...",
      image: "https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000057/118939l.jpg",
      dataSource: "http://kingston.gov.au",
      nextElements: {
        "philip-island-penguins": "Philip island doesn't just have seals, it also has penguins!",
      }
    },
  ],

  /**
   * Test images are from the VisitVictoria open data portal: https://contenthub.visitvictoria.com/.
   */
  storyPanels: [
    {
      id: "italian-soccer",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "carlton-gardens",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "soccer-fields",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "philip-island-penguins",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "philip-island-seals",
      panelType: Math.round(Math.random() * 3),
    },
    {
      id: "aboriginal-heritage",
      panelType: Math.round(Math.random() * 3),
    },
  ]
};

const reducer = (state = defaultState, action) => {
  if (action.type === "SWITCH_SCREEN") {
    return Object.assign({}, state, { screen: action.screen });
  }
  return state;
};

export default reducer;
