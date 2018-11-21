import React from 'react';
import './Card.css';
import CardSettings from '../CardSettings/CardSettings';
import CardSubscription from '../../containers/CardSubscription';
import { DragSource } from 'react-dnd';

const ItemTypes = {
  CARD: 'card'
};

const cardSource = {
  beginDrag: props => {
    return {
      id: props.id,
      moveCard: props.moveCard
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const CardSettingsWithSubscription = CardSubscription(CardSettings);

const Card = ({ text, id, connectDragSource }) => {
  return connectDragSource(
    <div className='card'>
      <p className='card-text'>{text}</p>
      <CardSettingsWithSubscription id={id} />
    </div>
  );
};

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
