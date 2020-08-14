import axios from 'axios';
const BASEURL = 'http://localhost:3001/';

export default {
  getAllPlayers: function () {
    return axios.get(BASEURL + 'players', {
      headers: {},
    });
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
