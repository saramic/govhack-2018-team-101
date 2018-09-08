import React from 'react'
import './App.css';
import {Row, Col} from 'antd';
import AddStoryPanel from './components/AddStoryPanel';

const ViewStoryApp = (props) =>
    <div className="App">
        <Story {...props} />
    </div>;

const Story = ({storyElements, character, location, storyPanels, acceptStoryAction}) => {

  // Given a particular panel (with an ID reference to a story element), lookup the corresponding
  // story element from the list available to us.
  const getStoryElement = (storyPanel) => {
    return storyElements.find(element => element.id === storyPanel.id);
  };

  // We have some basic details of the story panel (an ID and the panel type), but we need
  // to use the ID to lookup more substantial details from the list of content available to us.
  const getStoryPanelDetails = (storyPanel) => {
    return Object.assign({}, getStoryElement(storyPanel), {panelType: storyPanel.panelType});
  };

  // Based on the current story panel, see if it has another story panel next to it.
  // If it does, do we know of a nice way to segue from one to the other?
  const getSegue = (storyPanel, nextIndex) => {
    if (nextIndex >= storyPanels.length) {
      return null;
    }

    const thisElement = getStoryElement(storyPanel);
    const nextElement = getStoryElement(storyPanels[nextIndex]);
    if (nextElement == null) {
      return null;
    }

    const nextElementSegueDetails = thisElement.nextElements.find(e => e.element === nextElement.id);

    return nextElementSegueDetails ? nextElementSegueDetails.segue : null;
  };

  return (
    <div className="story">
        <h1>{character} in {location}...</h1>
        <Row gutter={12}>
            {storyPanels.map((storyPanel, i) =>
                <Col span={storyPanel.panelType <= 1 ? 5 : 7}>
                    <StoryPanel {...getStoryPanelDetails(storyPanel)} segue={getSegue(storyPanel, i + 1)} />
                </Col>
            )}

            <Col span={3}>
                <AddStoryPanel
                    onDeclineStory={() => {}}
                    onAcceptStory={(id) => acceptStoryAction(id)}
                    segue={getStoryElement(storyPanels[storyPanels.length-1]).nextElements[0].segue}
                    nextPanel={getStoryElement(getStoryElement(storyPanels[storyPanels.length-1]).nextElements[0])}/>
            </Col>
        </Row>
    </div>
  );
};

export const StoryPanel = ({panelType, template, image, segue = null}) =>
    <div className={`story-panel story-panel-${panelType}`}>
        <div className="content">
            <span className="text">{template} {segue}</span>
            <div className="image" style={{backgroundSize: 'cover', backgroundImage: 'url(' + (image ? image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Aboriginal_Art_Australia%281%29.jpg/1280px-Aboriginal_Art_Australia%281%29.jpg') + ')'}}>
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
// const DataSource = (props) =>
//     <div className="data-source">
//         Source: {props.dataSource}
//     </div>;

export default ViewStoryApp;
