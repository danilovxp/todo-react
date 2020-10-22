import React from "react";
import TodoListItem from "./../TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item, idx) => {
    const { id, ...itemProps } = item;
    return (
      <li key={idx} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return (
    <div>
      <ul className="list-group todo-list">{elements}</ul>
    </div>
  );
};

export default TodoList;
