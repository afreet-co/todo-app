import React, { FC } from "react";
import { useAppContext } from "../contexts/AppContext";
import { useThemeContext } from "../contexts/ThemeContext";
import { CustomCheckbox } from "./CustomCheckbox";
import { Cross } from "./icons/cross";
type TodoItemProps = {
  id: number;
  text: string;
  isCompleted: boolean;
};
export const TodoItem: FC<TodoItemProps> = ({ id, isCompleted, text }) => {
  const { filter, removeItem, toggleIsCompleted } = useAppContext();
  const { theme } = useThemeContext();
  return (
    <>
      {filter === "all" ||
      (filter === "active" && !isCompleted) ||
      (filter === "completed" && isCompleted) ? (
        <div
          className={`group flex py-3 px-4 items-center border-b-2 sm:border-b border-solid ${theme.border} last:border-b-0`}
        >
          <CustomCheckbox
            checked={isCompleted}
            controlId={"item" + id}
            className="w-1/8"
            onChanged={() => toggleIsCompleted(id)}
          />
          <p
            className={`w-6/8 sm:w-7/8 sm:group-hover:w-6/8 ${
              isCompleted ? `line-through ${theme.textMuted}` : theme.text
            }`}
          >
            {text}
          </p>
          <button
            className="w-1/8 sm:w-auto sm:group-hover:w-1/8 justify-center flex sm:hidden sm:group-hover:flex transition-all duration-150"
            onClick={() => removeItem(id)}
          >
            <Cross />
          </button>
        </div>
      ) : null}
    </>
  );
};
