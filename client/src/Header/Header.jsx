import React from 'react';
// import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import 'bulma/css/bulma.css'

import { toggleAddModal } from '../appState/actions';

import 'bulma/css/bulma.css';

import './Header.scss';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header id="main-header" className="header">
      <div className="logo">
        <CloudColor className="logo__color" />
        <CloudEffects className="logo__effects" />
      </div>
      <h1 className="header__title">FWI Poker Challenge</h1>
      <button
        className="button is-danger"
        onClick={() => dispatch(toggleAddModal())}
      >
        addplayer
      </button>
    </header>
  );
};

export default Header;
