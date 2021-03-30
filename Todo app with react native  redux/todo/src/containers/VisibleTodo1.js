import {connect} from 'react-redux';

const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id =>
    dispatch({
      type: 'TOGGLE_TODO',
      id,
    }),
});
