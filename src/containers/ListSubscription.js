import { connect } from 'react-redux';
import { addList, deleteList, updateList } from '../actions';

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatchToProps = dispatch => ({
  addList: text => dispatch(addList(text)),
  deleteList: listID => dispatch(deleteList(listID)),
  updateList: (listID, text) => dispatch(updateList(listID, text))
});

const ListSubscription = baseComponent => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(baseComponent);
};

export default ListSubscription;
