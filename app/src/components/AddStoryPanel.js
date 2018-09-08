import { Component } from "react";
import { Modal, Button } from "antd";
import React from "react";
import "../Story.css";
import CardDataSource from "./CardDataSource";
import {StoryPanel} from '../ViewStoryApp';

const Card = ({ visible, data, closeModal, onAcceptProposedStoryPanel, lastStoryPanel, proposedStoryAddition }) => {

  let segue = null;
  if (lastStoryPanel != null && lastStoryPanel.nextElements != null) {
    const validSegue = lastStoryPanel.nextElements.find(e => e.id === proposedStoryAddition.id);
    if (validSegue != null) {
      segue = validSegue.segue;
    }
  }

  return (
    <div className={visible ? "card" : "card card--back"}>

      <div className="card__side card__front">
        <StoryPanel image={proposedStoryAddition ? proposedStoryAddition.image : ''} panelType={0} segue={null} template={segue} />
      </div>

      <div className="card__back">

        <StoryPanel image={proposedStoryAddition ? proposedStoryAddition.image : ''} panelType={0} segue={null} template={proposedStoryAddition ? proposedStoryAddition.template : ''} />

        <div className="card__data">
          <p>Test</p>

          <CardDataSource />

          <Button onClick={onAcceptProposedStoryPanel}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default class AddStoryPanel extends Component {
  state = { frontShown: true };

  hideForm = () => {
    this.setState({
      frontShown: true
    });
  };

  showCardFront = () => {
    this.setState({ frontShown: false });
  };

  showNextStory = () => {
    this.props.onRejectProposedStoryPanel();
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
        {this.props.proposedStoryAddition == null ? null :
          <Modal
            title={null}
            visible={true}
            onOk={this.hideForm}
            onCancel={this.hideForm}
            className="story-modal"
            footer={null}>

            <Card
              visible={this.state.frontShown}
              closeModal={this.hideForm}
              lastStoryPanel={this.props.lastStoryPanel}
              proposedStoryAddition={this.props.proposedStoryAddition}
              onAcceptProposedStoryPanel={this.props.onAcceptProposedStoryPanel}
            />

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
        }
    </div>
    );
  };
}
