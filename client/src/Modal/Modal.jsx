import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTRIES } from '../constants';

import {
  fetchPlayersSuccess,
  deletePlayerSuccess,
  addPlayerSuccess,
  updatePlayerSuccess,
  toggleAddModal,
  handleInputChange,
} from '../appState/actions';

// import './PlayerTable.scss';
import API from '../Utils/API';

const getState = (state) => {
  console.log('UI State  ===================');
  console.log(state.UI);
  // console.log(state.players['68ba4d39-2ae8-4756-8456-e0e6f23e48a3'])
  //   console.log(state);
  return state.UI;
};

const Modal = () => {
  const dispatch = useDispatch();

  const uiState = useSelector(getState);

  function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    console.log(!!pattern.test(str));
    return !!pattern.test(str);
  }

  function inputChange(event) {
    console.log(
      '===================+++=++=++HANDLE INPUT CHANGE=++=++==++=++=+=++=++==+=====++='
    );
    const { name, value } = event.target;

    // if (name === 'winnings') {
    //     newValue = value.replace(/[^0-9]/g, '')
    // }

    const data = {
      name: name,
      value: name === 'winnings' ? Number(value.replace(/[^0-9]/g, '')) : value,
    };
    console.log(data);

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

  function toDollars() {
    return uiState.winnings.toLocaleString(undefined, {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
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

    console.log(allCountries);
    return allCountries;
  }

  return (
    <div className={uiState.modal ? 'modal is-active' : 'modal'}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add a Player</p>
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
                  value={toDollars()}
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
          <button className="button is-success" onClick={() => addPlayer()}>
            Save Player
          </button>
          <button className="button" onClick={() => dispatch(toggleAddModal())}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
