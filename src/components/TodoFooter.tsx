import React, { FC, useState } from "react";

export const TodoFooter: FC = () => {
  const [cat, setCat] = useState<"all" | "active" | "completed">("all");
  return (
    <div className="flex justify-between px-4 py-3 text-dark-300 text-sm">
      <div>5 items left</div>
      <div className="px-2 space-x-4">
        <FilterButton
          text="All"
          isActive={cat === "all"}
          onClick={() => setCat("all")}
        />
        <FilterButton
          text="Active"
          isActive={cat === "active"}
          onClick={() => setCat("active")}
        />
        <FilterButton
          text="Completed"
          isActive={cat === "completed"}
          onClick={() => setCat("completed")}
        />
      </div>
      <button className={`hover:text-dark-100 `}>Clear Completed</button>
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
      className={`hover:text-dark-100 ${isActive ? "text-bright-blue" : ""}`}
    >
      {text}
    </button>
  );
};
