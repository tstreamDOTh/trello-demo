import { connect } from 'react-redux';
import { deleteCard, updateCard } from '../actions';

const mapStateToProps = state => ({
  cards: state.cards,
  lists: state.lists
});

const mapDispatchToProps = dispatch => ({
  deleteCard: id => dispatch(deleteCard(id)),
  updateCard: (id, text) => dispatch(updateCard(id, text))
});

const CardActionInjector = baseComponent => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(baseComponent);
};

export default CardActionInjector;
