import React, { useState } from "react";
import { CustomCheckbox } from "../components/CustomCheckbox";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { TodoFooter } from "../components/TodoFooter";
import { TodoItem } from "../components/TodoItem";

const Index = () => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-dark-700 ">
      <div className=" w-2/5 p-2 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-3xl text-dark-100 font-bold">T O D O</span>
          <ThemeSwitcher />
        </div>
        <div className="flex mt-4 mx-2 p-4 items-center bg-dark-600 rounded shadow-lg">
          <CustomCheckbox
            checked={checked}
            controlId="check"
            onChanged={() => setChecked((prev) => !prev)}
            className="w-1/8"
          />
          <input
            className="w-7/8 bg-dark-600 text-dark-100 text-xl focus:outline-none caret-blue-500"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mx-2 bg-dark-600 rounded shadow-lg">
          {Array.from({ length: 5 }).map((_, index) => (
            <TodoItem
              id={index}
              isCompleted={index % 2 == 0}
              text={`Todo Item ${index}`}
            />
          ))}
          <TodoFooter />
        </div>
      </div>
    </div>
  );
};
export default Index;
