export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
// <<<<<<< HEAD

      return { todos: state.todos.concat(action.payload.text) };

    default:
      return state;
  }
}
// =======
//       return { todos: state.todos.concat(action.todo) }
//     default:
//       return state;
//   };
// };
// >>>>>>> canon/solution




// export default function manageTodo(state = {
//  --- todos: [],
// }, action) {
//   switch (action.type) {
//     case 'ADD_TODO':

//       return { todos: state.todos.concat(action.payload.text) };

//     default:
//       return state;
//   }
// }
