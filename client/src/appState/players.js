import {
  FETCH_PLAYERS_SUCCESS,
  ADD_PLAYER_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  UPDATE_PLAYER_SUCCESS,
  GET_MORE_PLAYERS_SUCCESS,
} from './constants';

function mergePlayers(state, { players }) {
  const newState = {
    ...state,
  };
  players.forEach((player) => {
    newState[player.id] = player;
  });
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
  return newState;
}

function mergeNewPlayers(state, data) {
  let newState = state;
  data.forEach((data) => {
    newState = {
      ...newState,
      [data.id]: {
        id: data.id,
        name: data.name,
        country: data.country,
        winnings: data.winnings,
        imageUrl: data.imageUrl,
      },
    };
  });
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
    case GET_MORE_PLAYERS_SUCCESS:
      return mergeNewPlayers(state, action.payload.data.players);
    case DELETE_PLAYER_SUCCESS:
      return removePlayer(state, action.payload.data);
    case UPDATE_PLAYER_SUCCESS:
      return mergeNewPlayer(state, action.payload.data);
    default:
      return state;
  }
}
