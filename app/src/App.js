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
        Fact {props.fact.label}
    </div>;

export default App;
