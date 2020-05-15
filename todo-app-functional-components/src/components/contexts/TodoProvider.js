import React, { useState } from "react";
import I from "immutable";

export const Context = React.createContext({});

const TodoProvider = (props) => {
  const [todos, setTodos] = useState(I.List());

  return (
    <Context.Provider value={{ todos, setTodos }}>
      {props.children}
    </Context.Provider>
  );
};

export default TodoProvider;
