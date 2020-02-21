import React from 'react';

import '../../variables.scss'
import './progress-bar.styles.scss';

const ProgressBar = props => {
  const { progress } = props
  return(
    <div class="progress">
      <div class="progress-bar" style={{ width: progress + "%"}} aria-valuemin="0" aria-valuemax="100">
        { progress + "%" }
      </div>
    </div>
  )
}

export default ProgressBar;