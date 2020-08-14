import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTRIES } from '../constants';
import {
  deletePlayerSuccess,
  addPlayerSuccess,
  updatePlayerSuccess,
  toggleAddModal,
  handleInputChange,
} from '../appState/actions';
import API from '../Utils/API';
import { validURL, toDollars } from '../Utils/TOOLS';

const Modal = () => {
  const dispatch = useDispatch();

  const getState = (state) => {
    console.log('UI State  ===================');
    console.log(state.UI);
    return state.UI;
  };

  const uiState = useSelector(getState);

  function inputChange(event) {
    const { name, value } = event.target;
    const data = {
      name: name,
      value: name === 'winnings' ? Number(value.replace(/[^0-9]/g, '')) : value,
    };
    dispatch(handleInputChange(data));
  }

  async function addPlayer() {
    const newPlayer = {
      name: uiState.name,
      country: uiState.country,
      winnings: parseInt(uiState.winnings),
      imageUrl: validURL(uiState.imageUrl) ? uiState.imageUrl : '',
    };
    try {
      const response = await API.addPlayer(newPlayer);
      const data = response.data;
      console.log(data);
      dispatch(addPlayerSuccess(data));
      dispatch(toggleAddModal());
    } catch (error) {
      console.error(error);
    }
  }

  async function updatePlayer() {
    const playerId = uiState.id;
    const updatedPlayerData = {
      name: uiState.name,
      country: uiState.country,
      winnings: parseInt(uiState.winnings),
      imageUrl: validURL(uiState.imageUrl) ? uiState.imageUrl : '',
    };
    try {
      const response = await API.updatePlayer(playerId, updatedPlayerData);
      const data = response.data;
      console.log(data);
      dispatch(updatePlayerSuccess(data));
      dispatch(toggleAddModal());
    } catch (error) {
      console.error(error);
    }
  }

  async function deletePlayer(id) {
    try {
      const response = await API.deletePlayer(id);
      dispatch(deletePlayerSuccess(id));
      dispatch(toggleAddModal());
    } catch (error) {
      console.error(error);
    }
  }

  function countryOptions() {
    const allCountries = [];
    Object.keys(COUNTRIES).forEach((item, i) =>
      allCountries.push(
        <option value={item} key={item + i}>
          {COUNTRIES[item]}
        </option>
      )
    );
    return allCountries;
  }

  return (
    <div className={uiState.modal ? 'modal is-active' : 'modal'}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {uiState.modalAction === 'update' ? 'Update' : 'Add'} a Player
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => dispatch(toggleAddModal())}
          ></button>
        </header>
        <section className="modal-card-body">
          {/* {<!-- Content ... -->} */}
          <div className="block">
            <form>
              <div className="field">
                <label className="label">Name</label>
                <input
                  onChange={inputChange}
                  name="name"
                  value={uiState.name}
                  type="text"
                  className="input"
                  placeholder="Enter Name"
                />
              </div>
              <div className="field">
                <label className="label">Winnings</label>
                <input
                  type="text"
                  className="input is-success"
                  placeholder="Enter Winnings"
                  onChange={inputChange}
                  name="winnings"
                  value={toDollars(uiState.winnings)}
                />
              </div>
              <div className="field">
                <label className="label">Country</label>
                <p className="control">
                  <span value={uiState.country} className="select">
                    <select
                      style={{ width: '100vw' }}
                      value={uiState.country}
                      name="country"
                      onChange={inputChange}
                    >
                      <option value="">Select Country</option>
                      {countryOptions()}
                    </select>
                  </span>
                </p>
              </div>
              <div className="field">
                <label className="label">Image URL</label>
                <input
                  name="imageUrl"
                  type="text"
                  className="input is-danger"
                  placeholder="Enter URL to image"
                  value={uiState.imageUrl}
                  onChange={inputChange}
                />
              </div>
            </form>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button
            disabled={
              uiState.name &&
              (uiState.winnings || uiState.winnings >= 0) &&
              uiState.country
                ? false
                : true
            }
            className="button is-success"
            onClick={() => {
              uiState.modalAction === 'update' ? updatePlayer() : addPlayer();
            }}
          >
            {uiState.modalAction === 'update' ? 'Save Changes' : 'Save Player'}
          </button>
          {uiState.modalAction === 'update' ? (
            <button
              className="button is-danger"
              onClick={() => deletePlayer(uiState.id)}
            >
              Delete player
            </button>
          ) : (
            <></>
          )}
          <button className="button" onClick={() => dispatch(toggleAddModal())}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
