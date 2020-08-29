import { combineReducers } from 'redux';

import playerIds from './playerIds';
import players from './players';
import UI from './UI';
import sortAPI from './sortAPI';

export default combineReducers({
  UI,
  playerIds,
  players,
  sortAPI,
});
