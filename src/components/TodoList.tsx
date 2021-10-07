import React from "react";
import DraggableList from "react-draggable-list";
import { Todo, useAppContext } from "../contexts/AppContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const container = React.useRef<HTMLDivElement>();
  const { todos, reorderTodos } = useAppContext();

  return (
    <div className="h-80 sm:h-70 overflow-auto" ref={container}>
      <DraggableList<Todo, void, TodoItem>
        itemKey="id"
        template={TodoItem}
        list={todos}
        onMoveEnd={(newList) => reorderTodos(newList)}
        container={() => container.current!}
      />
    </div>
  );
};
