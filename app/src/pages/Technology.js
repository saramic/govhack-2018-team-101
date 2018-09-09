import React from "react";
import { Card, Row, Col } from 'antd';
import "./Technology.css";

const { Meta } = Card;

const Technology = () => {

    return (
        <div className={"technology"}>
            <h1>Technology</h1>
            <div style={{ padding: '0px 300px' }}>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card
                            style={{ margin: '10px auto' }}
                            cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" />}>
                            <Meta
                                title="Modern Reactjs/Redux frontend"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            style={{ margin: '10px auto' }}
                            cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjNz5FK8cSCYbGIlrqcKuYKpt0c4EQjXknweaH8x_nuD0NLcJ" />}>
                            <Meta
                                title="Ruby on Rails backend"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            style={{ margin: '10px auto' }}
                            cover={<img alt="example" src="https://cdn-images-1.medium.com/max/908/0*I3hkRieQ6B3qwwhy." />}>
                            <Meta
                                title="Python Juptyter notebook data processing pipeline"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            style={{ margin: '10px auto' }}
                            cover={<img alt="example" src="https://cdn.iconscout.com/public/images/icon/free/png-512/heroku-logo-brand-development-tools-33b6da5a9c74ddd9-512x512.png" />}>
                            <Meta
                                title="Running live on Heroku cloud service"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>

            
        </div>
    )
}

export default Technology;
