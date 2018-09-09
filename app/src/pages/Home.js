import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import './home.css'

const Home = () => {


  return <div className="background">
    <div className="home-panel">
      <h1>My Local Story</h1>
      <p class="subtitle">Telling real stories, for real kids, with real data.</p>
      <Button href="/view" type="primary">Create My Story</Button>
    </div>
  </div>
};

export default Home;