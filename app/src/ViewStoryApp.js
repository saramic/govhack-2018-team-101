import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

const ViewStoryApp = (props) =>
    <Grid fluid={true} className="App">
        <Row>
            <Col md={8} mdOffset={2}>
                <Story location={props.location} facts={props.facts} />
            </Col>
        </Row>
    </Grid>;

const Story = (props) =>
    <div className="story">
        <h1>A Story About {props.location}...</h1>
        {props.facts.map(fact => <Fact {...fact} />)}
    </div>;

const Fact = (props) =>
    <div className="fact">
        <Grid fluid={true}>
            <Row>
                <h2>{props.label}</h2>
            </Row>
            <Row>
                <img className="fact-image img-thumbnail" src={props.image} />
                <DataSource dataSource={props.dataSource} />
            </Row>
        </Grid>
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
