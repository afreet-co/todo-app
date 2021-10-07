import React, { FC } from "react";
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
  return (
    <div className={`flex items-center relative${className ? className : ""}`}>
      <input
        type="checkbox"
        id={controlId}
        checked={checked}
        className="opacity-0 absolute h-8 w-8"
        onChange={onChanged}
      />
      <div className="rounded-full bg-gradient-to-br from-gradient-from to-gradient-to w-8 h-8 flex justify-center items-center">
        <div
          className={`visible ${
            !checked ? "bg-dark-600" : ""
          } rounded-full flex h-7 w-7 items-center justify-center transition-all duration-150`}
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
