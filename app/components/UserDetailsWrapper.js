import React, { PropTypes } from 'react';

export default ({ header, children }) => (
  <div className="col-sm-6">
    <p className="lead">{header}</p>
    {children}
  </div>
);
