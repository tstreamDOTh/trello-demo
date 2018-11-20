import { connect } from 'react-redux';
import Board from '../components/Board/Board.react';
import { deleteCard } from '../actions';

const mapStateToProps = state => ({
  cards: state.cards,
  lists: state.lists
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteCard: () => dispatch(deleteCard(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
