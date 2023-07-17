import Todo from "./todo/Todo";
import "./Home.scss";
import { useState, createContext, useEffect } from "react";

// let HomeContext = null; //undefined
export const HomeContext = createContext(null);

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="home">
      <h1>Home Page</h1>
      <HomeContext.Provider
        value={{ inputValue, setInputValue, todos, setTodos }}
      >
        <Todo />
      </HomeContext.Provider>
    </div>
  );
};

export default Home;
