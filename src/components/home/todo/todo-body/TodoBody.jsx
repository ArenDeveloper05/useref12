import { useContext } from "react";
import { HomeContext } from "../../Home";

const TodoBody = () => {
  const { state } = useContext(HomeContext);

  return (
    <div className="todo-body">
      {state.todos.map(({ id, title }) => {
        return (
          <div className="todo-body-item" key={id}>
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default TodoBody;
