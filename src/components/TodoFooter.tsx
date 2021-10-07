import React, { FC, useState } from "react";
import { useAppContext } from "../contexts/AppContext";

export const TodoFooter: FC = () => {
  const { itemsLeft, setFilter, filter, clearCompleted } = useAppContext();

  return (
    <div className="flex justify-between px-4 py-3 text-dark-300 text-sm">
      <div>{itemsLeft} items left</div>
      <div className="px-2 space-x-4">
        <FilterButton
          text="All"
          isActive={filter === "all"}
          onClick={() => setFilter("all")}
        />
        <FilterButton
          text="Active"
          isActive={filter === "active"}
          onClick={() => setFilter("active")}
        />
        <FilterButton
          text="Completed"
          isActive={filter === "completed"}
          onClick={() => setFilter("completed")}
        />
      </div>
      <button className={`hover:text-dark-100 `} onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

type FilterButtonProps = {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
};

const FilterButton: FC<FilterButtonProps> = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        isActive
          ? "text-bright-blue cursor-default"
          : "hover:text-dark-100 cursor-pointer"
      }
    >
      {text}
    </button>
  );
};
