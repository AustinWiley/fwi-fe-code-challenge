import React from 'react';
import 'bulma/css/bulma.css';

import Header from './Header/Header';
import PlayerTable from './PlayerTable/PlayerTable';
import Modal from './Modal/Modal';

const App = () => {
  return (
    <>
      <Modal />
      <Header />
      <PlayerTable />
    </>
  );
};

export default App;
