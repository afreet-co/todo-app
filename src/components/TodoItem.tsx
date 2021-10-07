import React, { FC } from "react";
import { useAppContext } from "../contexts/AppContext";
import { CustomCheckbox } from "./CustomCheckbox";
import { Cross } from "./icons/cross";
type TodoItemProps = {
  id: number;
  text: string;
  isCompleted: boolean;
};
export const TodoItem: FC<TodoItemProps> = ({ id, isCompleted, text }) => {
  const { filter, removeItem, toggleIsCompleted } = useAppContext();
  return (
    <>
      {filter === "all" ||
      (filter === "active" && !isCompleted) ||
      (filter === "completed" && isCompleted) ? (
        <div className=" group flex p-4 items-center border-b border-solid border-dark-500 last:border-b-0 ">
          <CustomCheckbox
            checked={isCompleted}
            controlId={"item" + id}
            className="w-1/8"
            onChanged={() => toggleIsCompleted(id)}
          />
          <p
            className={` w-7/8 group-hover:w-6/8 ${
              isCompleted ? "line-through text-dark-300" : "text-dark-100"
            }`}
          >
            {text}
          </p>
          <button
            className="group-hover:w-1/8 justify-center hidden group-hover:flex transition-all duration-150"
            onClick={() => removeItem(id)}
          >
            <Cross />
          </button>
        </div>
      ) : null}
    </>
  );
};
