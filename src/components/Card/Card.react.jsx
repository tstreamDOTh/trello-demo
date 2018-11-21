import React from 'react';
import './Card.css';
import CardSettings from '../CardSettings/CardSettings';
import CardActionInjector from '../../containers/CardActionInjector';

const StoreActionInjectedCardSettings = CardActionInjector(CardSettings);

const Card = ({ text, id }) => (
  <div className='card'>
    <p className='card-text'>{text}</p>
    <StoreActionInjectedCardSettings id={id} />
  </div>
);

export default Card;
