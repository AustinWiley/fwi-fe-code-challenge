import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPlayersSuccess,
  handleOpenUpdate,
  getMorePlayers,
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

  async function openUpdateModal(id) {
    try {
      const response = await API.getAPlayer(id);
      dispatch(handleOpenUpdate(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  const sortState = useSelector((state) => state.sortAPI);

  async function getMore() {
    try {
      if (sortState.from < sortState.total) {
        const newFrom = sortState.from + sortState.size;

        const sortData = {
          ...sortState,
          from: newFrom,
        };

        const response = await API.getSortedPlayers(sortData);
        const data = response.data;
        dispatch(getMorePlayers(data));
      }
    } catch (error) {
      console.error(error);
    }
  }

  //continuous scrolling - get more results once user has scrolled to the bottom of the window
  window.onscroll = function () {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;

    if (offset >= height - 10) {
      getMore();
    }
  };

  const players = useSelector(getPlayers);

  return (
    <div
      id="player-table-grid"
      role="grid"
      aria-label="Poker Players"
      className="player-table"
    >
      <TableHeader />
      <TableBody players={players} openUpdateModal={openUpdateModal} />
    </div>
  );
};

export default PlayerTable;
