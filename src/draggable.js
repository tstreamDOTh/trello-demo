export const ItemTypes = {
  CARD: 'card'
};

export const cardSource = {
  beginDrag: props => {
    return {
      id: props.id,
      moveCard: props.moveCard
    };
  }
};

export const columnTarget = {
  drop: (props, monitor) => {
    const droppedCard = monitor.getItem();
    droppedCard.moveCard(droppedCard.id, props.listID);
  }
};

export const cardCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

export const listCollect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});
