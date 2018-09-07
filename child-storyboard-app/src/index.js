import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import './index.css';
import storyBoardReducer from './storyBoardReducer';
import registerServiceWorker from './registerServiceWorker';

class StoryBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {newStory: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newStory: event.target.value});
  }

  handleSubmit(event) {
    console.log('new story: ' + this.state.newStory);
    this.props.addStory(this);
    event.preventDefault();
  }

  render() {
    return (
      <div className="StoryBuilder">
        <h2>And then ...</h2>
        <ul>
          {this.props.newStories.map((newStory) => {
              return (<li>{newStory}</li>)
            }
          )}
        </ul>
        <i>choose next story point above and write a sentence about it</i>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" class="newStoryInput" value={this.state.newStory} onChange={this.handleChange}/>
            <input type="submit" value="add to story"/>
          </form>
        </div>
      </div>
    )
  }
}

class StoryBoard extends Component {
  render() {
    return (
      <div className="StoryBoard">
        <h2>The story so far</h2>
        <ul>
          {this.props.stories.map((story) => {
              return (<li>{story}</li>)
            }
          )}
        </ul>
      </div>
    )
  }
}

class StoryBoardApp extends Component {
  handleClick(story) {
    const stories = this.props.stories.slice();
    console.log(story)
    // console.log(stories)
  }

  render() {
    return (
      <div className="StoryBoardApp">
        <h2>The Story of Matilda</h2>
        <p>
          A grade 6 school girl from Collingwood College using open data to explore her community
          and build a story
        </p>
        <StoryBuilder
          newStories={this.props.newStories}
          addStory={(story) => this.handleClick(story)}/>
        <StoryBoard
          stories={this.props.stories}/>
      </div>
    );
  }
}

StoryBoardApp = connect(state => state)(StoryBoardApp);

const store = createStore(storyBoardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  console.log(store.getState())
});

ReactDOM.render(
  <Provider store={store}><StoryBoardApp/></Provider>,
  document.getElementById('root')
);
registerServiceWorker();
