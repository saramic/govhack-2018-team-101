import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import './home.css'

const Home = () => {


  return <div className="background">
    <div className="home-panel">
      <h1>My Local Story</h1>
      <p class="subtitle">Telling real stories, for real people, with real data.</p>
      <Link to="/view" type="primary" className="ant-btn ant-btn-default">Create My Story</Link>
    </div>
  </div>
};

export default Home;