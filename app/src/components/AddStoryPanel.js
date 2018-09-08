import { Component } from "react";
import { Modal, Button } from "antd";
import React from "react";
import "../Story.css";
import CardDataSource from "./CardDataSource";

const Card = ({ visible, data, closeModal, onAcceptProposedStoryPanel, proposedStoryAddition }) => {
  return (
    <div className={visible ? "card" : "card card--back"}>
      <div className="card__side card__front">
        <img src={proposedStoryAddition.image} />
      </div>
      <div className="card__back">
        <img src={proposedStoryAddition.image} />

        <div className="card__data">
          <p>{proposedStoryAddition.template}</p>

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

  acceptStory = () => {
    this.setState({ frontShown: true });
    this.props.onAcceptProposedStoryPanel();
  };

  render = () => {
    return (
      <div className="story-panel story-panel-new">
        <a
          href="#"
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
            visible={this.props.proposedStoryAddition != null}
            onOk={this.hideForm}
            onCancel={this.hideForm}
            footer={null}
          >
            <Card
              visible={this.state.frontShown}
              closeModal={this.hideForm}
              onAcceptProposedStoryPanel={this.acceptStory}
              proposedStoryAddition={this.props.proposedStoryAddition}/>

            {this.state.frontShown ? (
              <div>
                <Button
                  className="card__button--right"
                  type="primary"
                  shape="circle"
                  icon="check"
                  onClick={this.showCardFront}
                />
                <Button
                  className="card__button--left"
                  type="primary"
                  shape="circle"
                  icon="close"
                  onClick={this.showNextStory}
                />
              </div>
            ) : null}
          </Modal>}
      </div>
    );
  };
}
