import {
  FETCH_PLAYERS_SUCCESS,
  ADD_PLAYER_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  UPDATE_PLAYER_SUCCESS,
} from './constants';

function mergePlayers(state, { players }) {
  const newState = {
    ...state,
  };
  players.forEach((player) => {
    newState[player.id] = player;
  });
  // console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
  // console.log(players)
  // console.log(newState)
  // console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
  return newState;
}

function mergeNewPlayer(state, data) {
  const newState = {
    ...state,
    [data.id]: {
      id: data.id,
      name: data.name,
      country: data.country,
      winnings: data.winnings,
      imageUrl: data.imageUrl,
    },
  };

  // console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
  // console.log(data)
  // console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
  // console.log('this is new old state ================')
  // console.log(state)
  // console.log('this is new state ================')
  // console.log(newState)
  return newState;
}

function removePlayer(state, data) {
  const newState = {
    ...state,
    [data]: undefined,
  };
  return newState;
}

export default function players(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return mergePlayers(state, action.payload.data);
    case ADD_PLAYER_SUCCESS:
      return mergeNewPlayer(state, action.payload.data);
    case DELETE_PLAYER_SUCCESS:
      return removePlayer(state, action.payload.data);
    case UPDATE_PLAYER_SUCCESS:
      return mergeNewPlayer(state, action.payload.data);
    default:
      return state;
  }
}
