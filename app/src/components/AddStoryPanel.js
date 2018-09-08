import { Component } from "react";
import { Modal, Button } from "antd";
import React from "react";
import "../Story.css";

const Card = ({ visible, data }) => {
  return (
    <div className={visible ? "card" : "card card--back"}>
      <div class="card__side card__front">
        <img src="https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg" />
      </div>
      <div class="card__back">
        <img src="https://s3-ap-southeast-2.amazonaws.com/previews.dams.me/667/image/large/000/000/000/000/000000000000071/132952l.jpg" />

        <Button onClick>Submit</Button>
      </div>
    </div>
  );
};

export default class AddStoryPanel extends Component {
  state = { visible: true, frontShown: true };

  showForm = () => {
    this.setState({
      visible: true
    });
  };

  hideForm = () => {
    this.setState({
      visible: false
    });
  };

  showCardFront = () => {
    this.setState({ frontShown: false });
  };

  render = () => {
    return (
      <div className="story-panel story-panel-new">
        <a
          href="#"
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
          <Card visible={this.state.frontShown} />

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
