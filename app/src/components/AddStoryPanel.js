import { Component } from "react";
import { Modal, Button } from "antd";
import React from "react";
import "../Story.css";
import CardDataSource from "./CardDataSource";

const Card = ({ visible, onAcceptStory, closeModal }) => {
  return (
    <div className={visible ? "card" : "card card--back"}>
      <div className="card__side card__front">
        <h2>Do you want to see more penguins?</h2>
        <img alt="need an alt" src="https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg" />
      </div>
      <div className="card__back">
        <img alt="need an alt" src="https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg" />

        <div className="card__data">
          <p>Test</p>

          <CardDataSource />

          <Button onClick={() => {
            onAcceptStory('school')
            closeModal()
          }
          }>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default class AddStoryPanel extends Component {
  state = { visible: false, frontShown: true };

  showForm = () => {
    this.setState({
      visible: true
    });
  };

  hideForm = () => {
    this.setState({
      visible: false,
      frontShown: true
    });
  };

  showCardFront = () => {
    this.setState({ frontShown: false });
  };

  showNextStory = () => {
    console.log("SHOW NEXT STORY IN QUEUE");
  };

  render = () => {
    return (
      <div className="story-panel story-panel-new">
        <a
          href="#new-panel"
          onClick={e => {
            e.preventDefault();
            this.showForm();
          }}
        >
          <div className="content">
            <div className="add icon">+</div>
            <div className="add text">Add</div>
          </div>
        </a>
        <Modal
          title={null}
          visible={this.state.visible}
          onOk={this.hideForm}
          onCancel={this.hideForm}
          footer={null}
        >
          <Card visible={this.state.frontShown} closeModal={this.hideForm} onAcceptStory={this.props.onAcceptStory} />

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
