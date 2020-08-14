import axios from 'axios';
const BASEURL = 'http://localhost:3001/';

export default {
  getAllPlayers: function () {
    return axios.get(BASEURL + 'players', {
      headers: {},
    });
  },
  deletePlayer: function (playerId) {
    return axios.delete(BASEURL + 'players/' + playerId);
  },
  // addPlayer: function () {
  //   return (
  //     axios.post(BASEURL+'players', {
  //           name: "Haven Wiley",
  //           country: "US",
  //           winnings: 1234234,
  //           imageUrl: ""
  //     })
  //   )
  // },
  addPlayer: function (data) {
    console.log(data);
    return axios.post(BASEURL + 'players', data);
  },
  updatePlayer: function (playerId) {
    return axios.patch(BASEURL + 'players/' + playerId, {
      name: 'Emmry Wiley',
      country: 'MX',
      winnings: 2234234,
      // imageUrl: "http.plops.com/image", //this cant be empty
    });
  },
};
