import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchPlayersSuccess,
  deletePlayerSuccess,
  addPlayerSuccess,
  updatePlayerSuccess,
} from '../appState/actions';

import './PlayerTable.scss';
import API from '../Utils/API';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const getPlayers = (state) => {
  return state.playerIds.map((id) => state.players[id]);
};

const PlayerTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function fetchPlayers() {
      const response = await API.getAllPlayers();
      const data = response.data;
      dispatch(fetchPlayersSuccess(data));
    })();
  }, [dispatch]);

  async function addPlayer() {
    try {
      const response = await API.addPlayer();
      const data = response.data;
      console.log(data);
      dispatch(addPlayerSuccess(data));
    } catch (error) {
      console.error(error);
    }
  }

  async function updatePlayer(id) {
    console.log(id);
    const response = await API.updatePlayer(id);
    console.log(
      '---------------------playerUpdae response PLayerTable.jsx  line 45'
    );
    console.log(response);
    dispatch(updatePlayerSuccess(response.data));
  }

  async function deletePlayer(id) {
    try {
      const response = await API.deletePlayer(id);
      console.log(response);
      dispatch(deletePlayerSuccess(id));
    } catch (error) {
      console.error(error);
    }
  }

  const players = useSelector(getPlayers);

  return (
    <div
      id="player-table-grid"
      role="grid"
      aria-label="Poker Players"
      className="player-table"
    >
      <TableHeader />
      <TableBody
        players={players}
        deletePlayer={deletePlayer}
        addPlayer={addPlayer}
        updatePlayer={updatePlayer}
      />
    </div>
  );
};

export default PlayerTable;
