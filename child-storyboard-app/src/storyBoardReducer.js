const defaultState = {
  newStories: [ // TODO this is the thing that needs to be auto generated
    'Park bench',
    'Train Station',
    'Park',
    'Someone speaking Italian',
    'It started to rain',
  ],
  stories: [
    'I start at my school Collingwood College',
    'I decide to go to the near by park',
    'I find a park bench so I take a seat and read my book',
    'I hear some kids playing soccer and they are talking Polish',
    'I follow their language and it takes me to Glen Eira, the biggest grouping of people who speak Polish',
  ],
};

const storyBoardReducer = (state = defaultState, action) => {
  if (action.type === 'ADD_STORY') {
    return Object.assign({}, state, {
      stories: action.stories,
    });
  }
  return state;
};

export default storyBoardReducer ;
