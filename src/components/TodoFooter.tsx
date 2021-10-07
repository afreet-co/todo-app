import React, { FC } from "react";
import { useAppContext } from "../contexts/AppContext";
import { useThemeContext } from "../contexts/ThemeContext";
import { Filter } from "./Filter";

export const TodoFooter: FC = () => {
  const { itemsLeft, clearCompleted } = useAppContext();
  const { theme } = useThemeContext();

  return (
    <div
      className={`flex justify-between px-5 sm:px-4 py-5 sm:py-3 border-t-2 sm:border-t border-solid ${theme.border} ${theme.textMuted} text-sm  transition-all duration-150`}
    >
      <div>{itemsLeft} items left</div>
      <Filter onMobile={false} />
      <button className={theme.footerButtonHover} onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};
