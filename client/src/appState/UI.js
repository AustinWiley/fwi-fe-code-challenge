import {
  FETCH_PLAYERS_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  ADD_PLAYER_SUCCESS,
  UPDATE_PLAYER_SUCCESS,
  TOGGLE_ADD_MODAL,
  HANDLE_INPUT_CHANGE,
} from './constants';
import { toggleAddModal } from './actions';

// function removePlayer() {
//   console.log('removing plaeyr')
// }

function removePlayer(state, data) {
  const newState = state.filter((id) => id !== data);
  // ...state,
  // playerIds: [ ...state.playerIds.filter(id => id !== data) ]
  // };
  // newState = state.filter(({ id }) => id !== action.data);
  // playerIds.forEach((playerId) => {
  //   newState[player.id] = player;
  // });

  console.log(data);
  console.log(state);
  // console.log(newState)
  // console.log(newState)
  return newState;
}

function addPlayer(state, data) {
  const newState = state;
  newState.push(data.id);

  // }
  // ...state,
  // playerIds: [ ...state.playerIds.filter(id => id !== data) ]
  // };
  // newState = state.filter(({ id }) => id !== action.data);
  // playerIds.forEach((playerId) => {
  //   newState[player.id] = player;
  // });

  console.log(data);
  console.log(state);
  console.log(newState);
  // console.log(newState)
  // console.log(newState)
  return newState;
}

const initialState = {
  modal: false,
  modalAction: '',
  name: '',
  winnings: '',
  country: '',
  imageUrl: '',
};

function inputChanges(state, action) {
  const newState = {
    ...state,
    [action.payload.data.name]: action.payload.data.value,
  };
  return newState;
}

function updateModal(state) {
  const newState = {
    ...state,
    modal: !state.modal,
    modalAction: '',
    name: '',
    winnings: '',
    country: '',
    imageUrl: '',
  };

  return newState;
}

export default function playerIds(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ADD_MODAL:
      return updateModal(state);
    case HANDLE_INPUT_CHANGE:
      return inputChanges(state, action);
    default:
      return state;
  }
}
