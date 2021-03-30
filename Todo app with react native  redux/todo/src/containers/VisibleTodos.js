import {connect} from 'react-redux';
import ToDoList from '../components/ToDoList';

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

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
