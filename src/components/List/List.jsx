import React from 'react';
import Card from '../Card/Card';
import './List.css';
import CardSubscription from '../../containers/CardSubscription';
import CardAdder from '../CardAdder/CardAdder';
import { DropTarget } from 'react-dnd';
import ListSubscription from '../../containers/ListSubscription';
import ListSettings from '../ListSettings/ListSettings';

const AddCardWithSubscription = CardSubscription(CardAdder);
const ListSettingsWithSubscription = ListSubscription(ListSettings);

const ItemTypes = {
  CARD: 'card'
};

const columnTarget = {
  drop: (props, monitor) => {
    const droppedCard = monitor.getItem();
    droppedCard.moveCard(droppedCard.id, props.listID);
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

const List = ({
  text,
  cards,
  listID,
  deleteCard,
  moveCard,
  connectDropTarget
}) =>
  connectDropTarget(
    <div className='card-list-container'>
      <h2>{text}</h2>
      <ListSettingsWithSubscription listID={listID} />
      {cards.reduce(
        (total, card) => (card.listID === listID ? ++total : total),
        0
      ) === 0 ? (
        <h4 className='empty-list'>Empty List 📭</h4>
      ) : (
        ''
      )}
      {cards
        .filter(card => card.listID === listID)
        .map(card => (
          <Card
            text={card.text}
            id={card.id}
            deleteCard={deleteCard}
            moveCard={moveCard}
            listID={listID}
            key={card.id}
          />
        ))}

      <AddCardWithSubscription listID={listID} />
    </div>
  );

export default CardSubscription(
  DropTarget(ItemTypes.CARD, columnTarget, collect)(List)
);
