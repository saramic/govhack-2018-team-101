import storyElementsData from "./story_elements";

const defaultState = {
  location: "Kingston",
  character: "Matilda",
  published: false,
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
  storyPanels: []
};

/**
 * Given a list of all possible story elements, choose one to show to the use next (i.e. via a tinder card).
 * If we have some planned segues in mind, then pass "limitToIds" to ensure we only choose from those story elements.
 */
const chooseRandomStoryElement = (elements, limitToIds = []) => {

  // Search all the elements, or only search a subset of elements.
  let availableElements = (limitToIds == null || limitToIds.length === 0)
    ? elements
    : elements.filter(e => limitToIds.find(e1 => e1 === e.id) != null);

  if (availableElements.length === 0) {
    // Uh oh... Choose a random one from all just to make sure we get something.
    availableElements = elements;
  }

  return availableElements[parseInt(Math.random() * (availableElements.length - 1))];
};

/**
 * Looks at the last story panel in action, and decides what eligible segues we have available (if any). If none are
 * avaialble, we'll use any random story element.
 */
const showNewProposedStoryPanel = (state, excludeId = null) => {

  const availableElements = excludeId == null ? state.storyElements : state.storyElements.filter(e => e.id !== excludeId);

  let newElement = null;

  // At the start, choose any old story.
  if (state.storyPanels.length === 0) {
    newElement = chooseRandomStoryElement(availableElements);
  } else {
    const lastStoryItem = state.storyPanels[state.storyPanels.length - 1];
    const lastElement = state.storyElements.find(e => e.id === lastStoryItem.id);
    const potentialSegues = lastElement.nextElements == null ? [] : lastElement.nextElements.map(e => e.id);
    newElement = chooseRandomStoryElement(availableElements, potentialSegues)
  }

  if (newElement == null) {
    newElement = chooseRandomStoryElement(availableElements)
  }

  return newElement;
};

const reducer = (state = defaultState, action) => {

  if (action.type == "START_STORY") {
    // console.log(action.serializedStory.split(","));
    const ids = action.serializedStory.split(",");
    console.log("ids ", ids);
    return Object.assign({}, state, {
      published: true,
      storyPanels: ids.map(id => {
        return {
          id: id,
          panelType: Math.round(Math.random() * 3)
        };
      })
    });
  } else if (action.type === "SHOW_PROPOSED_STORY_PANEL") {

    return Object.assign({}, state, {proposedStoryAddition: showNewProposedStoryPanel(state)});

  } else if (action.type === "CLOSE_PROPOSED_STORY_PANEL") {

    return Object.assign({}, state, {proposedStoryAddition: null});

  } else if (action.type === "REJECT_PROPOSED_STORY_PANEL") {

    return Object.assign({}, state, {proposedStoryAddition: showNewProposedStoryPanel(state, state.proposedStoryAddition.id)});

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
