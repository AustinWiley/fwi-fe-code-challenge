import { combineReducers } from 'redux';

import playerIds from './playerIds';
import players from './players';
import UI from './UI';

export default combineReducers({
  UI,
  playerIds,
  players,
});
