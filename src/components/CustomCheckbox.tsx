import React, { FC } from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import { Check } from "./icons/check";

type CustomCheckboxProps = {
  controlId: string;
  label?: string;
  checked: boolean;
  onChanged?: () => void;
  className?: string;
};

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  checked,
  controlId,
  label,
  onChanged,
  className,
}) => {
  const { theme } = useThemeContext();
  return (
    <div className={`flex items-center relative ${className ? className : ""}`}>
      <input
        type="checkbox"
        id={controlId}
        checked={checked}
        className="opacity-0 absolute sm:h-8 sm:w-8 w-6 h-6"
        onChange={onChanged}
      />
      <div className="rounded-full bg-gradient-to-br from-gradient-from to-gradient-to sm:h-8 sm:w-8 w-6 h-6 flex justify-center items-center">
        <div
          className={`visible ${
            !checked ? theme.primaryBackground : ""
          } rounded-full flex sm:h-7 sm:w-7 w-5 h-5 items-center justify-center transition-all duration-150`}
        >
          {checked ? <Check /> : null}
        </div>
      </div>
      {label && (
        <label htmlFor={controlId} className="select-none">
          {label}
        </label>
      )}
    </div>
  );
};
