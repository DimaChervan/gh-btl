import React from 'react';
import { transparentBg } from '../styles';

export default ({ children }) => (
  <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
    {children}
  </div>
);
