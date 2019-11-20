export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 8675309
    },
    {
      item: 'Read the Holy Bible',
      completed: true,
      id: 8675308
    },
    {
      item: 'Spend time with my wife',
      completed: false,
      id: 8675307
    }
  ]
};

export const reduceTodo = (state, action) => {
  let newTodo = {
    item: action.payload,
    completed: false,
    id: Date.now()
  };
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload.id === todo.id) {
            console.log(todo);
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
