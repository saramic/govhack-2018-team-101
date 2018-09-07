import React, { Component } from 'react';
import './App.css';

const App = (props) =>
    <div className="App">
        <Story story={props.data.story} />
    </div>;

const Story = (props) =>
    <div className="story">
        Story
        {props.story.facts.map(fact => <Fact fact={fact} />)}
    </div>;

const Fact = (props) =>
    <div className="fact">
        Fact: {props.fact.label}
        <DataSource dataSource={props.fact.dataSource} />
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

export default App;
