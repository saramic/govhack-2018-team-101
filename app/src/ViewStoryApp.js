import React from 'react';
import './App.css';

const ViewStoryApp = (props) =>
    <div className="App">
        <Story location={props.location} storyPanels={props.storyPanels} />
    </div>;

const Story = (props) =>
    <div className="story">
        <h1>A Story About {props.location}...</h1>
        {props.storyPanels.map(storyPanel => <StoryPanel {...storyPanel} />)}
    </div>;

const StoryPanel = (props) =>
    <div className="story-panel">
        <h2>{props.label}</h2>
        <img className="story-panel-image img-thumbnail" src={props.image} />
        <DataSource dataSource={props.dataSource} />
    </div>;

/**
 * This component should be hidden to start with. When the user interacts with the fact in some way, we should then
 * allow them to explore the data set the source came from. Some examples of how this may work could include:
 *  - Embed Tableau visualisations of the data source.
 *  - Link directly to the data source.
 *  - Explain the license of the data source.
 * @param props
 * @returns {*}
 * @constructor
 */
const DataSource = (props) =>
    <div className="data-source">
        Source: {props.dataSource}
    </div>;

export default ViewStoryApp;
