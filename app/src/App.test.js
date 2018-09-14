import React from 'react';
import ReactDOM from 'react-dom';
import ViewStoryApp from './ViewStoryApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewStoryApp
    storyPanels={[]}
    storyElements={[]}
    match={{path: "", params: {stories: ''}}}
    onStart={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
