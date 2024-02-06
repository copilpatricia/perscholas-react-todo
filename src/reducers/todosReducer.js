export function todosReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "add": {
      const newTodo = {
        id: new Date().getTime(),
        title: action.payload.title,
        completed: false,
      };
      return [newTodo, ...state];
    }
    case "remove": {
        return state.filter((state) => state.id !== action.payload)
    }

    case "edit": {
      return state.map((state) => {
        if(state.id === action.payload.id){
          return {...state, title: action.payload.title}
        }
        return state
      })
    }

    default:
      return state;
  }
}
