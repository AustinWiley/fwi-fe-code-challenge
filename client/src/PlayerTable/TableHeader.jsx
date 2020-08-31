import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from '../Utils/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchPlayersSuccess, toggleSort } from '../appState/actions';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const TableHeader = () => {
  const dispatch = useDispatch();

  const sortState = useSelector((state) => state.sortAPI);

  async function sortPlayers(sortBy) {
    try {
      let sortOrder;
      if (sortState.sortBy !== sortBy) {
        sortOrder = 'asc';
      } else if (sortState.sortOrder === 'desc') {
        sortOrder = 'asc';
      } else {
        sortOrder = 'desc';
      }
      const sortData = {
        ...sortState,
        from: 0,
        sortOrder: sortOrder,
        sortBy: sortBy,
      };
      const response = await API.getSortedPlayers(sortData);
      if (response.status === 200) {
        dispatch(fetchPlayersSuccess(response.data));
        dispatch(toggleSort({ sortOrder, sortBy }));
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <table
      id="player-table-header"
      role="presentation"
      className="table table--fixed"
    >
      <thead>
        <tr role="row">
          <th role="columnheader" className="table__header table__edit" />
          <th role="columnheader" className="table__header table__avatar" />
          <th
            role="columnheader"
            className="table__header table__player"
            onClick={() => sortPlayers('name')}
          >
            Player
            {sortState.sortBy === 'name' ? (
              <FontAwesomeIcon
                className="table__edit_icon"
                icon={sortState.sortOrder === 'asc' ? faArrowUp : faArrowDown}
              />
            ) : (
              <></>
            )}
          </th>
          <th
            role="columnheader"
            className="table__header table__winnings"
            onClick={() => sortPlayers('winnings')}
          >
            Winnings
            {sortState.sortBy === 'winnings' ? (
              <FontAwesomeIcon
                className="table__edit_icon"
                icon={sortState.sortOrder === 'asc' ? faArrowUp : faArrowDown}
              />
            ) : (
              <></>
            )}
          </th>
          <th
            role="columnheader"
            className="table__header table__native"
            onClick={() => sortPlayers('country')}
          >
            Native of
            {sortState.sortBy === 'country' ? (
              <FontAwesomeIcon
                className="table__edit_icon"
                icon={sortState.sortOrder === 'asc' ? faArrowUp : faArrowDown}
              />
            ) : (
              <></>
            )}
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default TableHeader;
