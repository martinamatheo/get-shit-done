import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as IconFire} from '../../assets/img/fire.svg';

import './main-btn.styles.scss';

const MainButton = () => {
  return(
    <Link to="/todolist" className="my-btn main-btn">
      GET SHIT DONE <IconFire />
    </Link>
  )
}

export default MainButton;
