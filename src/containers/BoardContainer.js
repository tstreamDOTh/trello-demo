import { connect } from 'react-redux';
import Board from '../components/Board/Board.react';

const mapStateToProps = state => ({
  cards: state.cards,
  lists: state.lists
});

export default connect(mapStateToProps)(Board);
