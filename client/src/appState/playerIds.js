import { FETCH_PLAYERS_SUCCESS, DELETE_PLAYER_SUCCESS } from './constants';

function removePlayer(state, data) {
  const newState = state.filter((id) => id !== data);
  console.log(data);
  console.log(state);
  return newState;
}

export default function playerIds(state = [], action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return action.payload.data.players.map((player) => player.id);
    case DELETE_PLAYER_SUCCESS:
      return removePlayer(state, action.payload.data);
    default:
      return state;
  }
}
