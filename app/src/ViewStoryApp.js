import React, {Component} from 'react';
import './App.css';
import {Row, Col, Modal} from 'antd';
import AddStoryPanel from './components/AddStoryPanel';

const ViewStoryApp = (props) =>
    <div className="App">
        <Story {...props} />
    </div>;

const Story = (props) =>
    <div className="story">
        <h1>{props.character} in {props.location}...</h1>
        <Row gutter={12}>
            {props.storyPanels.map(storyPanel =>
                <Col span={storyPanel.panelType <= 1 ? 3 : 5}>
                    <StoryPanel {...storyPanel} />
                </Col>
            )}

            <Col span={3}>
                <AddStoryPanel />
            </Col>
        </Row>
    </div>;

const StoryPanel = (props) =>
    <div className={`story-panel story-panel-${props.panelType}`}>
        <div className="content">
            <span className="text">{props.text}</span>
            <div className="image" style={{backgroundSize: 'cover', backgroundImage: 'url(' + props.image + ')'}}>

            </div>
        </div>
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
