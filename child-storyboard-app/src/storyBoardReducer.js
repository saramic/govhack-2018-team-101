import uuid from 'uuid';

const defaultState = {
  newStories: [ // TODO this is the thing that needs to be auto generated
    { id: uuid.v1(), text: 'Park bench', source: 'park_bench_data'},
    { id: uuid.v1(), text: 'Train Station', source: 'park_bench_data'},
    { id: uuid.v1(), text: 'Park', source: 'park_bench_data'},
    { id: uuid.v1(), text: 'Someone speaking Italian', source: 'park_bench_data'},
    { id: uuid.v1(), text: 'It started to rain', source: 'park_bench_data'},
  ],
  stories: [
    { id: uuid.v1(), text: 'I start at my school Collingwood College'},
    { id: uuid.v1(), text: 'I decide to go to the near by park'},
    { id: uuid.v1(), text: 'I find a park bench so I take a seat and read my book'},
    { id: uuid.v1(), text: 'I hear some kids playing soccer and they are talking Polish'},
    { id: uuid.v1(), text: 'I follow their language and it takes me to Glen Eira, the biggest grouping of people who speak Polish'},
  ],
};

const storyBoardReducer = (state = defaultState, action) => {
  if (action.type === 'ADD_STORY') {
    const stories = state.stories.concat({id: uuid.v1(), text: action.story });
    return Object.assign({}, state, {
      stories: stories,
    });
  }
  return state;
};

export default storyBoardReducer ;
