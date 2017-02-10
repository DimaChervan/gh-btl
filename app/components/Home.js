import React from 'react';
import { Link } from 'react-router';
import MainContainer from './MainContainer';

export default () => (
  <MainContainer>
    <h1>Github Battle</h1>
    <Link to="/playerOne">
      <button type="button" className="btn btn-lg btn-success">Get Battle</button>
    </Link>
  </MainContainer>
);
