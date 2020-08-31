import {
  FETCH_PLAYERS_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  GET_MORE_PLAYERS_SUCCESS,
} from './constants';

function removePlayer(state, data) {
  const newState = state.filter((id) => id !== data);
  return newState;
}

function addPlayers(state, data) {
  const newState = state;
  data.forEach((data) => {
    newState.push(data.id);
  });
  return state;
}

export default function playerIds(state = [], action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return action.payload.data.players.map((player) => player.id);
    case DELETE_PLAYER_SUCCESS:
      return removePlayer(state, action.payload.data);
    case GET_MORE_PLAYERS_SUCCESS:
      return addPlayers(state, action.payload.data.players);
    default:
      return state;
  }
}
