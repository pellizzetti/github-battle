import axios from 'axios';

function get(location, query) {
  return axios.get(`https://api.github.com/${location}/${query}`);
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
}

function getPlayersData(player) {
  return get('users', `${player.login}/repos`)
    .then(getTotalStars)
    .then(totalStars => ({
      followers: player.followers,
      totalStars,
    }));
}

function calculateScores(players) {
  return [
    (players[0].followers * 3) + players[0].totalStars,
    (players[1].followers * 3) + players[1].totalStars,
  ];
}

const githubApiHelper = {

  getUsersInfo(players) {
    return axios.all(players.map(username => get('users', username)))
      .then(info => info.map(user => user.data))
      .catch(err => console.warn('Error in getUsersInfo: ', err));
  },

  battle(players) {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(err => console.warn('Error in battle function: ', err));
  },

};

export default githubApiHelper;
