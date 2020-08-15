import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleAddModal } from '../appState/actions';
import './Header.scss';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header_container">
      <header id="main-header" className="header">
        <div className="logo">
          <CloudColor className="logo__color" />
          <CloudEffects className="logo__effects" />
        </div>
        <h1 className="header__title">FWI Poker Challenge</h1>
      </header>
      <h1 className="header_container__subtitle">POKER PLAYERS</h1>
      <button
        className="button is-family-sans-serif is-inverted is-outlined is-primary mr-6 mb-2"
        onClick={() => dispatch(toggleAddModal())}
      >
        <FontAwesomeIcon className="__icon" icon={faPlus} />
        Player
      </button>
    </div>
  );
};

export default Header;
