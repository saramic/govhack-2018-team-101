import { Component } from "react";
import { Modal, Button } from "antd";
import React from "react";
import "../Story.css";
import DataVisualization from "./DataVisualization";
import { StoryPanel } from "../ViewStoryApp";

const Card = ({
  visible,
  data,
  closeModal,
  onAcceptProposedStoryPanel,
  lastStoryPanel,
  proposedStoryAddition,
  showVisualisation
}) => {
  let segue = null;
  if (lastStoryPanel != null && lastStoryPanel.nextElements != null) {
    const validSegue = lastStoryPanel.nextElements.find(
      e => e.id === proposedStoryAddition.id
    );
    if (validSegue != null) {
      segue = validSegue.segue;
    }
  }

  return (
    <div className={visible ? "card" : "card card--back"}>
      <div className="card__side card__front">
        <StoryPanel
          image={
            proposedStoryAddition ? proposedStoryAddition.id + ".jpg" : null
          }
          panelType={0}
          segue={null}
          template={segue}
        />
      </div>

      <div className="card__back">
        <StoryPanel
          image={
            proposedStoryAddition ? proposedStoryAddition.id + ".jpg" : null
          }
          panelType={0}
          segue={null}
          template={proposedStoryAddition ? proposedStoryAddition.template : ""}
        />

        <div className="card__data">
          <h2>{proposedStoryAddition.template}</h2>

          {/* <CardDataSource data={proposedStoryAddition.dataSource} /> */}

          <p>{proposedStoryAddition.dataSource.name}</p>
          <p>{proposedStoryAddition.dataSource.hackerspace_id}</p>
          <p>{proposedStoryAddition.dataSource.link}</p>

          <div className="button-container">
            <Button
              onClick={showVisualisation}
              className="learn-more-button"
              type="dashed"
            >
              Learn more
            </Button>
            <Button
              className="btn-add"
              icon="check"
              onClick={() => {
                closeModal();
                onAcceptProposedStoryPanel();
              }}
              type="primary"
            >
              Add to story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class AddStoryPanel extends Component {
  state = { frontShown: true, side: "card" };

  hideForm = () => {
    this.setState({
      frontShown: true,
      side: "card"
    });
  };

  showCardFront = () => {
    this.setState({ frontShown: false });
  };

  showNextStory = () => {
    this.props.onRejectProposedStoryPanel();
  };

  showVisualisation = () => {
    this.setState({ side: "viz" });
  };

  getCardToDisplay = side => {
    switch (side) {
      case "viz":
        return (
          <DataVisualization
            data={this.props.proposedStoryAddition.dataSource}
          />
        );
      default:
        return (
          <Card
            visible={this.state.frontShown}
            closeModal={this.hideForm}
            lastStoryPanel={this.props.lastStoryPanel}
            proposedStoryAddition={this.props.proposedStoryAddition}
            onAcceptProposedStoryPanel={this.props.onAcceptProposedStoryPanel}
            showVisualisation={this.showVisualisation}
          />
        );
    }
  };

  render = () => {
    return (
      <div className="story-panel story-panel-new">
        <a
          href="#new-panel"
          onClick={e => {
            e.preventDefault();
            this.props.onShowProposedStoryPanel();
          }}
        >
          <div className="content">
            <div className="add icon">+</div>
            <div className="add text">Add</div>
          </div>
        </a>
        {this.props.proposedStoryAddition == null ? null : (
          <Modal
            title={null}
            visible={true}
            onOk={this.hideForm}
            onCancel={() => {
              this.hideForm();
              this.props.onCloseAddStoryPanel();
            }}
            className="story-modal"
            // bodyStyle={{ height: "100vh" }}
            footer={null}
          >
            {this.getCardToDisplay(this.state.side)}

            {this.state.frontShown ? (
              <div>
                <Button
                  htmlType="a"
                  className="card__button--right btn btn-accept"
                  type="primary"
                  shape="circle"
                  icon="check"
                  onClick={this.showCardFront}
                />
                <Button
                  htmlType="a"
                  className="card__button--left btn btn-reject"
                  type="primary"
                  shape="circle"
                  icon="close"
                  onClick={this.showNextStory}
                />
              </div>
            ) : null}
          </Modal>
        )}
      </div>
    );
  };
}
