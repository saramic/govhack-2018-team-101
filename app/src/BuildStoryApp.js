import React, { Component } from "react";
import "./App.css";

const BuildStoryApp = props => (
  <div className="BuildStoryApp">
    <h2>The Story of Matilda</h2>
    <p>
      A grade 6 school girl from Collingwood College using open data to explore
      her community and build a story
    </p>
    {/* <StoryBuilder
            newStories={props.newStories} />
        <StoryBoard
            stories={props.stories} /> */}
  </div>
);

// class StoryBuilder extends Component {
//     render() {
//         return (
//             <div className="StoryBuilder">
//                 <h2>And then ...</h2>
//                 <ul>
//                     {this.props.newStories.map((newStory) => {
//                             return (<li>{newStory}</li>)
//                         }
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }

// class StoryBoard extends Component {
//     render() {
//         return (
//             <div className="StoryBoard">
//                 <h2>The story so far</h2>
//                 <ul>
//                     {this.props.stories.map((story) => {
//                             return (<li>{story}</li>)
//                         }
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }

export default BuildStoryApp;
