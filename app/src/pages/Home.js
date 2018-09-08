import React from "react";
import { Button } from 'antd';
import './home.css'

const Home = () => {


  return <div className="background">
    <div className="home-panel">
      <h1>My Local Story</h1>
      <p>Some shit about what this app does goes here...</p>
      <Button type="primary">Create My Story</Button>
    </div>
  </div>
};

export default Home;