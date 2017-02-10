import axios from 'axios';
import { id, sec } from '../config/config';

const path = 'https://api.github.com/users/';
const param = '?client_id=' + id + '&client_secret=' + sec;

const getUserInfo = username => axios.get(path + username + param);

const getRepos = username => axios.get(`${path}${username}/repos${param}&per_age=180`);

const getTotalStars = repos => {
  return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
};

const getPlayersData = player => {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(totalStars => ({
      followers: player.followers,
      totalStars: totalStars
    }));
};

const calculateScores = ([first, second]) => {
  return [
    first.followers * 3 + first.totalStars,
    second.followers * 3 + second.totalStars
  ];
};

export const getPlayersInfo = players => {
  return axios.all(players.map(username => getUserInfo(username)))
    .then(info => info.map(user => user.data))
    .catch(err => console.warn('Error in getPlayersInfo', err));
};

export const battle = ([first, second]) => {
  const playerOneData = getPlayersData(first);
  const playerTwoData = getPlayersData(second);

  return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(err => console.warn('Error in battle', err));
};
