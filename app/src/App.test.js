import React from 'react';
import ReactDOM from 'react-dom';
import ViewStoryApp from './ViewStoryApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewStoryApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
