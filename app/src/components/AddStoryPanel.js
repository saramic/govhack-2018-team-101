import { Component } from "react";
import { Modal, Button } from "antd";
import React from "react";
import "../Story.css";
import CardDataSource from "./CardDataSource";

const Card = ({ visible, data, closeModal, onAcceptProposedStoryPanel }) => {
  return (
    <div className={visible ? "card" : "card card--back"}>
      <div className="card__side card__front">
        <h2>Do you want to see more penguins?</h2>
        <img src="https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg" />
      </div>
      <div className="card__back">
        <img src="https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg" />

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
        <Modal
          title={null}
          visible={this.props.proposedStoryAddition != null}
          onOk={this.hideForm}
          onCancel={this.hideForm}
          footer={null}
        >
          <Card visible={this.state.frontShown} closeModal={this.hideForm} onAcceptProposedStoryPanel={this.props.onAcceptProposedStoryPanel} />

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
        </Modal>
      </div>
    );
  };
}
