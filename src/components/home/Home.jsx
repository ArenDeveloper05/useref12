import Todo from "./todo/Todo";
import "./Home.scss";
import { useState, createContext, useEffect, useReducer } from "react";

// let HomeContext = null; //undefined
export const HomeContext = createContext(null);

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function reducer(state, action) {
    if (action.type === "add_todo") {
      console.log(action.title, "ays anunov obyekt petq e avelana");
      console.log(state.todos, "te ur petq e avelana");
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: action.title,
          },
        ],
      };
      //
    }
    //  else if (action.type === "delete_todo") {
    //   console.log(action.id);
    //   //
    // }
    // console.log(action);
    // console.log("hi");
  }

  const [state, dispatch] = useReducer(reducer, {
    todos: [{ id: 1, title: "Learn Redux" }],
  });

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="home">
      <h1>Home Page</h1>
      <HomeContext.Provider
        value={{ inputValue, setInputValue, todos, setTodos, state, dispatch }}
      >
        <Todo />
      </HomeContext.Provider>
    </div>
  );
};

export default Home;
