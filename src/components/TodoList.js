import React from "react";

const TodoList = ({ todos, handleDelete,handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos &&
        todos.map((t) => (
          <li className="singleTodo">
            <span className="todoText" key={t.id}>
              {t.todo}
            </span>
            <button
              style={{
                borderRadius: 25,
                padding: 10,
                border: "1px solid white",
                color: "white",
                backgroundColor: "blue",
              }}
              onClick={()=>handleEdit(t.id)}
            >
              Edit
            </button>
            <button
              style={{
                borderRadius: 25,
                padding: 10,
                border: "1px solid white",
                color: "white",
                backgroundColor: "orangered",
              }}
              onClick={() => handleDelete(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
