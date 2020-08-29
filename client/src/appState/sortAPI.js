import { TOGGLE_SORT, FETCH_PLAYERS_SUCCESS } from './constants';

const initialState = {
  sortBy: 'name',
  sortOrder: 'asc',
  size: 24,
  from: 0,
  total: 0,
};

function toggleSort(state, data) {
  let newState = {
    ...state,
    sortOrder: data.sortOrder,
    sortBy: data.sortBy,
  };
  return newState;
}

function totalPlayers(state, { total }) {
  const newState = {
    ...state,
    total: total,
  };
  return newState;
}

export default function playerIds(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SORT:
      return toggleSort(state, action.payload.data);
    case FETCH_PLAYERS_SUCCESS:
      return totalPlayers(state, action.payload.data);
    default:
      return state;
  }
}
