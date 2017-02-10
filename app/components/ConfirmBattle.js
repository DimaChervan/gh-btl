import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { space } from '../styles';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

const ConfirmBattle = ({ isLoading, players: [first, second], onInitiateBattle }) => {
  return isLoading === true
    ? <Loading speed={500} text={'Wait one Moment'} />
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Player 1'>
            <UserDetails info={first} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player 2'>
            <UserDetails info={second} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={space}>
            <button type='button' className='btn btn-lg btn-success' onClick={onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired
};

export default ConfirmBattle;
