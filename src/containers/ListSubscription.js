import { connect } from 'react-redux';
import { addList } from '../actions';

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatchToProps = dispatch => ({
  addList: text => dispatch(addList(text))
});

const ListSubscription = baseComponent => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(baseComponent);
};

export default ListSubscription;
