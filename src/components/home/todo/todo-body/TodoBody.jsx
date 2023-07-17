import { useContext } from "react";
import { HomeContext } from "../../Home";

const TodoBody = () => {
  const { todos } = useContext(HomeContext);

  return (
    <div className="todo-body">
      {todos.map(({ id, title }) => {
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
