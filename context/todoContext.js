import {createContext, useCallback, useState, useMemo} from 'react';

const initialState = {
  todos: [],
  addTodos: () => {},
  deleteTodo: () => {},
  chekedTodo: () => {},
};

const TodoContext = createContext(initialState);

const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const addTodos = useCallback(
    todo => {
      setTodos([...todos, todo]);
    },
    [todos],
  );
  const chekedTodo = useCallback(
    key => {
      setTodos(
        todos.map(todo =>
          todo.key === key ? {...todo, status: !todo.status} : todo,
        ),
      );
    },
    [todos],
  );

  const deleteTodo = useCallback(
    key => {
      setTodos(todos.filter(todo => todo.key !== key));
    },
    [todos],
  );

  const value = useMemo(
    () => ({
      todos,
      addTodos,
      deleteTodo,
      chekedTodo,
    }),
    [todos, addTodos, deleteTodo, chekedTodo],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
export {TodoProvider, TodoContext};
