import React from "react";
import { Todo, AppContext } from "../contexts/AppContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { CustomCheckbox } from "./CustomCheckbox";
import { Cross } from "./icons/cross";
interface TodoItemProps {
  item: Todo;
  itemSelected: number;
  dragHandleProps: object;
}

export class TodoItem extends React.Component<TodoItemProps, void> {
  render() {
    const {
      item: { id, isCompleted, text },
      dragHandleProps,
    } = this.props;

    return (
      <AppContext.Consumer>
        {({ filter, removeItem, toggleIsCompleted }) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <>
                {filter === "all" ||
                (filter === "active" && !isCompleted) ||
                (filter === "completed" && isCompleted) ? (
                  <div
                    className={`group flex py-3 px-4 cursor-move items-center border-b-2 sm:border-b border-solid ${theme.border} last:border-b-0  transition-all duration-150`}
                    {...dragHandleProps}
                  >
                    <CustomCheckbox
                      checked={isCompleted}
                      controlId={"item" + id}
                      className="w-1/8"
                      onChanged={() => toggleIsCompleted(id)}
                    />
                    <p
                      className={`w-6/8 transition-all duration-150 ${
                        isCompleted
                          ? `line-through ${theme.textMuted}`
                          : theme.text
                      }`}
                    >
                      {text}
                    </p>
                    <button
                      className="w-1/8 justify-center flex sm:hidden sm:group-hover:flex transition-all duration-150"
                      onClick={() => removeItem(id)}
                    >
                      <Cross />
                    </button>
                  </div>
                ) : null}
              </>
            )}
          </ThemeContext.Consumer>
        )}
      </AppContext.Consumer>
    );
  }
}
