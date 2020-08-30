import {
  TOGGLE_SORT,
  FETCH_PLAYERS_SUCCESS,
  ADD_PLAYER_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  GET_MORE_PLAYERS_SUCCESS,
} from './constants';

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
    from: 0,
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

function updateFrom(state, data) {
  const newState = {
    ...state,
    from: data,
  };
  return newState;
}

function addTotal(state, data) {
  const newState = {
    ...state,
    total: state.total + 1,
  };
  return newState;
}

function subtractTotal(state, data) {
  const newState = {
    ...state,
    total: state.total - 1,
  };
  return newState;
}

export default function playerIds(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SORT:
      return toggleSort(state, action.payload.data);
    case FETCH_PLAYERS_SUCCESS:
      return totalPlayers(state, action.payload.data);
    case ADD_PLAYER_SUCCESS:
      return addTotal(state, action.payload.data);
    case GET_MORE_PLAYERS_SUCCESS:
      return updateFrom(state, action.payload.data.from);
    case DELETE_PLAYER_SUCCESS:
      return subtractTotal(state, action.payload.data);
    default:
      return state;
  }
}
