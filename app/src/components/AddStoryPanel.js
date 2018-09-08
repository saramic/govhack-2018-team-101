import {Component} from "react";
import {Modal} from "antd";
import React from "react";

export default class AddStoryPanel extends Component {

    state = { visible: false };

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

    render = () => {
        return (
            <div className="story-panel story-panel-new">
                <a href="#" onClick={e => { e.preventDefault();  this.showForm(); }}>
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
                    footer={null}>

                    {/*<FrontOfCard visible={this.state.showFront} />
                    <BackOfCard />*/}

                </Modal>

            </div>
        );
    }
}
