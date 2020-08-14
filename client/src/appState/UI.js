import {
  TOGGLE_ADD_MODAL,
  HANDLE_INPUT_CHANGE,
  OPEN_UPDATE_MODAL,
} from './constants';

const initialState = {
  modal: false,
  modalAction: '',
  name: '',
  winnings: '',
  country: '',
  imageUrl: '',
  id: '',
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
    id: '',
  };
  return newState;
}

function openUpdate(state, action) {
  const newState = {
    ...state,
    modal: true,
    modalAction: 'update',
    ...action.payload.data,
  };
  return newState;
}

export default function playerIds(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ADD_MODAL:
      return updateModal(state);
    case HANDLE_INPUT_CHANGE:
      return inputChanges(state, action);
    case OPEN_UPDATE_MODAL:
      return openUpdate(state, action);
    default:
      return state;
  }
}
