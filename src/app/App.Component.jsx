import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('../../public/assets/css/style.css');

const AppComponent = props =>
  <div className="app-container">
    <ReactCSSTransitionGroup
      transitionName="next"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {React.cloneElement(props.children, { key: props.location.pathname })}
    </ReactCSSTransitionGroup>
  </div>;

AppComponent.propTypes = {
  children: PropTypes.element,
  location: PropTypes.objectOf(PropTypes.any),
};

export default AppComponent;
