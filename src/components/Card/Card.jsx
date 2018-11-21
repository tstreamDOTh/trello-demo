import React from 'react';
import './Card.css';
import CardSettings from '../CardSettings/CardSettings';
import CardSubscription from '../../containers/CardSubscription';
import { DragSource } from 'react-dnd';
import { ItemTypes, cardSource, cardCollect } from '../../draggable';

const CardSettingsWithSubscription = CardSubscription(CardSettings);

const Card = ({ text, id, connectDragSource }) => {
  return connectDragSource(
    <div className='card'>
      <p className='card-text'>{text}</p>
      <CardSettingsWithSubscription id={id} />
    </div>
  );
};

export default DragSource(ItemTypes.CARD, cardSource, cardCollect)(Card);
