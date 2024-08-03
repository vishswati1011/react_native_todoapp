import {createContext, useCallback, useState, useMemo} from 'react';

const initialState = {
  todos: [],
  addTodos: () => {},
  deleteTodo: () => {},
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
    }),
    [todos, addTodos, deleteTodo],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
export {TodoProvider, TodoContext};
