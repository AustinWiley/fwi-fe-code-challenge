import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPlayersSuccess, deletePlayerSuccess } from '../appState/actions';

import './PlayerTable.scss';
import API from '../Utils/API';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const getPlayers = (state) => {
  console.log(
    'get players State==================================================='
  );
  // console.log(state.players['68ba4d39-2ae8-4756-8456-e0e6f23e48a3'])
  console.log(state);

  return state.playerIds.map((id) => state.players[id]);
};

const PlayerTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function fetchPlayers() {
      const response = await API.getAllPlayers();
      const data = response.data;
      console.log('fetch players data');
      console.log(data);

      dispatch(fetchPlayersSuccess(data));
      // console.log(data)
      console.log('Use effect');
    })();
  }, [dispatch]);

  async function deletePlayer(id) {
    try {
      const response = await API.deletePlayer(id);
      console.log('Delete player response');
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
      <TableBody players={players} deletePlayer={deletePlayer} />
    </div>
  );
};

export default PlayerTable;
