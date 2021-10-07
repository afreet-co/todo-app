import React, { FC } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";

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
  const { theme } = useThemeContext();
  return (
    <button
      onClick={onClick}
      className={` font-bold ${
        isActive
          ? "text-bright-blue cursor-default"
          : `${theme.footerButtonHover} cursor-pointer`
      }`}
    >
      {text}
    </button>
  );
};
