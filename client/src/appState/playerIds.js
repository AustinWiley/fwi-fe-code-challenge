import {
  FETCH_PLAYERS_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  ADD_PLAYER_SUCCESS,
  UPDATE_PLAYER_SUCCESS,
} from './constants';

function removePlayer(state, data) {
  const newState = state.filter((id) => id !== data);
  return newState;
}

function addPlayer(state, data) {
  const newState = state;
  newState.push(data.id);
  return newState;
}

export default function playerIds(state = [], action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return action.payload.data.players.map((player) => player.id);
    case DELETE_PLAYER_SUCCESS:
      return removePlayer(state, action.payload.data);
    case ADD_PLAYER_SUCCESS:
      return addPlayer(state, action.payload.data);
    default:
      return state;
  }
}
