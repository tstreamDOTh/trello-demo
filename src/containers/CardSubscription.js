import { connect } from 'react-redux';
import { deleteCard, updateCard, addCard } from '../actions';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  deleteCard: id => dispatch(deleteCard(id)),
  updateCard: (id, text) => dispatch(updateCard(id, text)),
  addCard: (text, listID) => dispatch(addCard(text, listID))
});

const CardSubscription = baseComponent => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(baseComponent);
};

export default CardSubscription;
