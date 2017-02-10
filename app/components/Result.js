import React, { PropTypes } from 'react';
import { space } from '../styles';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import { Link } from 'react-router';
import MainContainer from './MainContainer';
import Loading from './Loading';

const StartOver = () => (
  <div className="col-sm-12" style={space}>
    <Link to="/playerOne">
      <button type="button" className="btn btn-lg btn-danger">Start Over</button>
    </Link>
  </div>
);


const Results = ({ isLoading, scores, playerInfo }) => {
  if (isLoading === true) {
    return <Loading text="Wait, please"/>
  }

  if (scores[0] === scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    );
  }

  const winningIndex = scores[0] > scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={scores[winningIndex]} info={playerInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={scores[losingIndex]} info={playerInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playerInfo: PropTypes.array.isRequired
};

export default Results;
