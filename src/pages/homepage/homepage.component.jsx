import React from 'react';

import MainButton from '../../components/main-btn/main-btn.component';

import {ReactComponent as IconFire} from '../../assets/img/fire.svg';

import './homepage.styles.scss';

const Homepage = () => {
  return(
    <div className="homepage-container">
      <h1 className="title">
        TO<span className="golden">D<IconFire className="fire"/></span>S
      </h1>
      <h2 className="subtitle">
        THE <span className="golden bold">ULTIMATE</span> SOLUTION FOR AN AMAZING PERFORMANCE
      </h2>
      <MainButton />
    </div>
  )
}

export default Homepage;
