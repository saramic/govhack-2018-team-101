import { Component } from "react";
import { Modal, Button } from "antd";
import React from "react";
import "../Story.css";
import CardDataSource from "./CardDataSource";
import {StoryPanel} from '../ViewStoryApp';

const Card = ({ visible, onAcceptStory, closeModal, nextBestSegue, nextPanel}) => {
  return (
    <div className={visible ? "card" : "card card--back"}>
      <div className="card__side card__front">
        <StoryPanel image={nextPanel() ? nextPanel().image : ''} panelType={0} segue={null} template={nextBestSegue()} />
      </div>
      <div className="card__back">
        <img alt="need an alt" src={nextPanel() ? nextPanel().image : ''} />

        <div className="card__data">
          <p>Test</p>

          <CardDataSource />

          <Button onClick={() => {
            onAcceptStory(nextPanel() ? nextPanel().id : 'school')
            closeModal()
          }
          }>Submit</Button>
        </div>
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
          className="story-modal"
          footer={null}>

          <Card
            visible={this.state.frontShown}
            closeModal={this.hideForm}
            onAcceptStory={this.props.onAcceptStory}
            nextBestSegue={this.props.nextBestSegue}
            nextPanel={this.props.nextPanel}/>

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
      </div>
    );
  };
}
