import axios from 'axios';
const BASEURL = 'http://localhost:3001/';

export default {
  getSortedPlayers: function ({ sortBy, sortOrder, size, from }) {
    return axios.get(
      BASEURL +
        `players?sortBy=${sortBy}&sortOrder=${sortOrder}&size=${size}&from=${from}`
    );
  },
  getAPlayer: function (playerId) {
    return axios.get(BASEURL + 'players/' + playerId);
  },
  deletePlayer: function (playerId) {
    return axios.delete(BASEURL + 'players/' + playerId);
  },
  addPlayer: function (data) {
    return axios.post(BASEURL + 'players', data);
  },
  updatePlayer: function (playerId, data) {
    return axios.patch(BASEURL + 'players/' + playerId, data);
  },
};
