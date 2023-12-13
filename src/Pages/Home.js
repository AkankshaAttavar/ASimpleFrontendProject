import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/blockbg.jpg';
import '../Styles/Home.css';

function Home() {
  return (
    <div className='home'style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1> What is blockchain? </h1>
        <p> simple Explanation</p>
        <Link to="/menu">
          <button> Read Here </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
