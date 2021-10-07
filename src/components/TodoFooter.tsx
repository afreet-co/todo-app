import React, { FC, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { Filter } from "./Filter";

export const TodoFooter: FC = () => {
  const { itemsLeft, clearCompleted } = useAppContext();

  return (
    <div className="flex justify-between px-5 md:px-4 py-5 md:py-3 border-t-2 border-solid border-dark-500 md:border-0 text-dark-300 text-sm">
      <div>{itemsLeft} items left</div>
      <Filter onMobile={false} />
      <button className={`hover:text-dark-100 `} onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};
