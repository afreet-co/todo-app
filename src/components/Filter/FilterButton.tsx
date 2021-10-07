import React, { FC } from "react";

type FilterButtonProps = {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
};

export const FilterButton: FC<FilterButtonProps> = ({
  text,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={` font-bold ${
        isActive
          ? "text-bright-blue cursor-default"
          : "hover:text-dark-100 cursor-pointer"
      }`}
    >
      {text}
    </button>
  );
};
