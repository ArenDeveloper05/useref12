import { useContext } from "react";
import { HomeContext } from "../../Home";

const TodoHead = () => {
  const { inputValue, setInputValue, setTodos, dispatch, state } =
    useContext(HomeContext);

  return (
    <div className="todo-head">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "add_todo",
            title: inputValue,
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoHead;
