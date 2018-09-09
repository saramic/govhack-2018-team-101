import storyElementsData from "./story_elements";

const defaultState = {
  location: "Kingston",
  character: "Matilda",

  proposedStoryAddition: null,

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
      panelType: Math.round(Math.random() * 3)
    },
    {
      id: "sport-recreation",
      panelType: Math.round(Math.random() * 3)
    },
    {
      id: "recycling",
      panelType: Math.round(Math.random() * 3)
    }
  ]
};

const reducer = (state = defaultState, action) => {
  if (action.type == "START_STORY") {
    const ids = action.serializedStory.split(",");
    console.log(ids);
    // return Object.assign({}, state, {
    //   storyPanels: ids.map(id => {
    //     return {
    //       id: id,
    //       panelType: Math.round(Math.random() * 3),
    //     }
    //   })
    // });
  } else if (action.type === "SHOW_PROPOSED_STORY_PANEL") {
    // TODO: Correctly limit results to those allowed by the `nextElements` thing.
    // const lastStoryItem = state.storyPanels.length === 0 ? null : state.storyPanels[state.storyPanels.length - 1];
    // const potentialNextStories = lastStoryItem === null ? state.storyElements :

    const newElement =
      state.storyElements[
        parseInt(Math.random() * (state.storyElements.length - 1))
      ];

    return Object.assign({}, state, { proposedStoryAddition: newElement });
  } else if (action.type === "REJECT_PROPOSED_STORY_PANEL") {
    const newElement =
      state.storyElements[
        parseInt(Math.random() * (state.storyElements.length - 1))
      ];
    return Object.assign({}, state, { proposedStoryAddition: newElement });
  } else if (action.type === "ACCEPT_PROPOSED_STORY_PANEL") {
    const newElement = state.proposedStoryAddition;
    const newPanel = Object.assign({}, newElement, {
      panelType: Math.round(Math.random() * 3)
    });

    return Object.assign({}, state, {
      proposedStoryAddition: null,
      storyPanels: state.storyPanels.concat(newPanel)
    });
  } else if (action.type === "ACCEPT_STORY") {
    const storyPanel = state.storyElements.filter(
      storyElement => storyElement.id === action.id
    )[0];

    const newStoryPanel = {
      id: storyPanel.id,
      panelType: Math.round(Math.random() * 3)
    };

    const stories = state.storyPanels.concat(newStoryPanel);
    return Object.assign({}, state, { storyPanels: stories });
  }
  return state;
};

export default reducer;
