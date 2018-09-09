import React, { Component } from "react";
import "./App.css";
import { Row, Col, Button } from "antd";
import AddStoryPanel from "./components/AddStoryPanel";
import * as actions from "./actions";

const ViewStoryApp = props => (
  <div className="App">
    <Story {...props} />
  </div>
);

class Story extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const allStories = this.props.storyElements.map(e => e.id).join(',');
    const storiesUrl = this.props.match.path === '/all' ? allStories : this.props.match.params.stories;

    if (storiesUrl != null) {
      this.props.onStart(storiesUrl)
    }
  }

  //      {
  //     storyElements,
  //   character,
  //   location,
  //   storyPanels,
  //   proposedStoryAddition,
  //   onShowProposedStoryPanel,
  //   onAcceptProposedStoryPanel,
  //   onRejectProposedStoryPanel,
  //   // onInitializeRoute
  // }  = this.props;

  // Given a particular panel (with an ID reference to a story element), lookup the corresponding
  // story element from the list available to us.
  getStoryElement = storyPanel => {
    return storyPanel
      ? this.props.storyElements.find(element => element.id === storyPanel.id)
      : null;
  };

  // We have some basic details of the story panel (an ID and the panel type), but we need
  // to use the ID to lookup more substantial details from the list of content available to us.
  getStoryPanelDetails = storyPanel => {
    const element = this.getStoryElement(storyPanel);
    return Object.assign({}, element, {
      panelType: storyPanel.panelType,
      image: element.image ? element.id + '.jpg' : null,
    });
  };

  // Based on the current story panel, see if it has another story panel next to it.
  // If it does, do we know of a nice way to segue from one to the other?
  getSegue = (storyPanel, nextIndex) => {
    if (nextIndex >= this.props.storyPanels.length) {
      return null;
    }

    const thisElement = this.getStoryElement(storyPanel);
    const nextElement = this.getStoryElement(this.props.storyPanels[nextIndex]);
    if (nextElement == null) {
      return null;
    }

    const nextElementSegueDetails = thisElement.nextElements.find(
      e => e.element === nextElement.id
    );

    return nextElementSegueDetails ? nextElementSegueDetails.segue : null;
  };

  nextBestNextElement = () => {
    // TODO this needs to know what has been tried by changing state
    const nextElementsList = this.getStoryElement(
      this.props.storyPanels[this.props.storyPanels.length - 1]
    ).nextElements;
    return nextElementsList.length > 0 ? nextElementsList[0] : null;
  };

  nextBestSegue = () => {
    return this.nextBestNextElement()
      ? this.nextBestNextElement().segue
      : "There is no segue - start message?";
  };

  nextBestPanel = () => {
    return this.nextBestNextElement()
      ? this.getStoryElement(this.nextBestNextElement())
      : "There is no segue - start message?";
  };

  shareStory = () => {
    const currentPanelsString = this.props.storyPanels
      .map(panel => panel.id)
      .join();

    // history.pushState(`/view/?panels=${currentPanels}`);

    // console.log(storyElements);
  };

  render() {
    return (
      <div className="story">
        <h1>
          {this.props.character} in {this.props.location}
          ...
        </h1>
        <Row gutter={12}>
          {this.props.storyPanels.map((storyPanel, i) => (
            <Col span={storyPanel.panelType <= 1 ? 5 : 7}>
              <StoryPanel
                {...this.getStoryPanelDetails(storyPanel)}
                segue={this.getSegue(storyPanel, i + 1)}
              />
            </Col>
          ))}

          {!this.props.published ? (
            <Col span={3}>
              <AddStoryPanel
                lastStoryPanel={
                  this.props.storyPanels == null ||
                  this.props.storyPanels.length === 0
                    ? null
                    : this.getStoryPanelDetails(
                        this.props.storyPanels[
                          this.props.storyPanels.length - 1
                        ]
                      )
                }
                proposedStoryAddition={this.props.proposedStoryAddition}
                onShowProposedStoryPanel={this.props.onShowProposedStoryPanel}
                onRejectProposedStoryPanel={
                  this.props.onRejectProposedStoryPanel
                }
                onAcceptProposedStoryPanel={(
                  customText = null,
                  stickers = null
                ) => this.props.onAcceptProposedStoryPanel()}
                onCloseAddStoryPanel={this.props.onCloseAddStoryPanel}
              />
            </Col>
          ) : null}
        </Row>

        {!this.props.published ? (
          <Button
            className="share-button"
            type="primary"
            icon="share-alt"
            size="large"
            href={
              "/view/" + this.props.storyPanels.map(panel => panel.id).join(",")
            }
          >
            Share my story
          </Button>
        ) : null}
      </div>
    );
  }
}

export const StoryPanel = ({ panelType, template, image, segue = null }) => (
  <div className={`story-panel story-panel-${panelType}`}>
    <div className="content">
      <span className="text">
        {template} {segue}
      </span>
      <div
        className="image"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(" +
            (image
              ? '/images/cartoon/' + image
              : '/images/cartoon/placeholder.jpg') +
            ")"
        }}
      />
    </div>
  </div>
);

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
