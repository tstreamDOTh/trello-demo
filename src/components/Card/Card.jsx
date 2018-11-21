import React from 'react';
import './Card.css';
import CardSettings from '../CardSettings/CardSettings';
import CardSubscription from '../../containers/CardSubscription';

const CardSettingsWithSubscription = CardSubscription(CardSettings);

const Card = ({ text, id }) => (
  <div className='card'>
    <p className='card-text'>{text}</p>
    <CardSettingsWithSubscription id={id} />
  </div>
);

export default Card;
