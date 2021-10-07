import React, { FC } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { FilterButton } from "./FilterButton";

export const Filter: FC<{ onMobile: boolean }> = ({ onMobile }) => {
  const { setFilter, filter } = useAppContext();
  return (
    <div
      className={` space-x-4 text-dark-300 ${
        onMobile ? "flex justify-around px-20" : "md:block hidden px-2"
      } mx-2 md:mx-0`}
    >
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
  );
};
