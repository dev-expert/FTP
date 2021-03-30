let nextid = 0;
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      if (action.text != '') {
        return [
          ...state,
          {
            id: nextid++,
            text: action.text,
            completed: false,
          },
        ];
      } else {
        alert('Enter a text');
      }

    // debugger;
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              //   it will change the value to its opposite
              completed: !todo.completed,
            }
          : todo,
      );

    default:
      return state;
  }
};
export default todos;
