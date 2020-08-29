import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPlayersSuccess,
  deletePlayerSuccess,
  addPlayerSuccess,
  handleOpenUpdate,
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
      const initSort = {
        sortBy: 'name',
        sortOrder: 'asc',
        size: 24,
        from: 0,
        total: 0,
      };
      const response = await API.getSortedPlayers(initSort);
      const data = response.data;
      dispatch(fetchPlayersSuccess(data));
    })();
  }, [dispatch]);

  async function addPlayer() {
    try {
      const response = await API.addPlayer();
      const data = response.data;
      dispatch(addPlayerSuccess(data));
    } catch (error) {
      console.error(error);
    }
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

  async function openUpdateModal(id) {
    try {
      const response = await API.getAPlayer(id);
      dispatch(handleOpenUpdate(response.data));
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
        openUpdateModal={openUpdateModal}
      />
    </div>
  );
};

export default PlayerTable;
