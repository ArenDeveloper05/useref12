import { useContext } from "react";
import { HomeContext } from "../../Home";

const TodoHead = () => {
  const { inputValue, setInputValue, setTodos } = useContext(HomeContext);

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
          setTodos((prev) => {
            return [
              ...prev,
              {
                id: prev.length + 1,
                title: inputValue,
              },
            ];
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoHead;
