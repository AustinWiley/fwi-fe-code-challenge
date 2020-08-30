import {
  FETCH_PLAYERS_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  ADD_PLAYER_SUCCESS,
  UPDATE_PLAYER_SUCCESS,
  TOGGLE_ADD_MODAL,
  HANDLE_INPUT_CHANGE,
  OPEN_UPDATE_MODAL,
  TOGGLE_SORT,
  GET_MORE_PLAYERS_SUCCESS,
} from './constants';

export function fetchPlayersSuccess(data) {
  return { type: FETCH_PLAYERS_SUCCESS, payload: { data } };
}

export function deletePlayerSuccess(data) {
  return { type: DELETE_PLAYER_SUCCESS, payload: { data } };
}

export function addPlayerSuccess(data) {
  return { type: ADD_PLAYER_SUCCESS, payload: { data } };
}

export function updatePlayerSuccess(data) {
  return { type: UPDATE_PLAYER_SUCCESS, payload: { data } };
}

export function toggleAddModal(data) {
  return { type: TOGGLE_ADD_MODAL, payload: { data } };
}

export function handleInputChange(data) {
  return { type: HANDLE_INPUT_CHANGE, payload: { data } };
}

export function handleOpenUpdate(data) {
  return { type: OPEN_UPDATE_MODAL, payload: { data } };
}

export function toggleSort(data) {
  return { type: TOGGLE_SORT, payload: { data } };
}

export function getMorePlayers(data) {
  return { type: GET_MORE_PLAYERS_SUCCESS, payload: { data } };
}
