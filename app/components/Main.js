import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default ({ children, location }) => (
  <div className="main-container">
    <ReactCSSTransitionGroup
      transitionName="appear"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        {React.cloneElement(children, {key: location.pathname})}
    </ReactCSSTransitionGroup>
  </div>
);
