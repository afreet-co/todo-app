import React, { useState } from "react";
import { CustomCheckbox } from "../components/CustomCheckbox";
import { Filter } from "../components/Filter";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { TodoFooter } from "../components/TodoFooter";
import { TodoList } from "../components/TodoList";
import { useAppContext } from "../contexts/AppContext";
import { useThemeContext } from "../contexts/ThemeContext";

const Index = () => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");

  const { addNew } = useAppContext();
  const { theme } = useThemeContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (text) {
      addNew(text, checked);
      setChecked(false);
      setText("");
    }
  };

  return (
    <div
      className={`flex items-center justify-center h-screen w-screen ${theme.screenBackground} sm:text-base text-sm transition-all duration-150`}
    >
      <div className="w-11/12 md:w-3/6 sm:w-2/5 p-2 space-y-6 sm:space-y-4">
        <div className="flex justify-between items-center px-2 :px-2">
          <span className={`text-3xl ${theme.heading} font-bold`}>T O D O</span>
          <ThemeSwitcher />
        </div>
        <form
          onSubmit={handleSubmit}
          className={`flex mt-4 mx-2 p-4 items-center ${theme.primaryBackground} rounded-lg sm:rounded shadow-lg  transition-all duration-150`}
        >
          <CustomCheckbox
            checked={checked}
            controlId="check"
            onChanged={() => setChecked((prev) => !prev)}
            className="w-1/8"
          />
          <input
            className={`w-7/8 text-base sm:text-xl focus:outline-none ${theme.input} ${theme.primaryBackground}  transition-all duration-150`}
            type="text"
            placeholder="Create a new todo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <div
          className={`mx-2 ${theme.primaryBackground} rounded-lg sm:rounded shadow-lg  transition-all duration-150`}
        >
          <TodoList />
          <TodoFooter />
        </div>
        <div
          className={`mx-2 rounded-lg sm:rounded shadow-lg px-5 sm:px-4 py-5 sm:py-3 block sm:hidden ${theme.primaryBackground}  transition-all duration-150`}
        >
          <Filter onMobile={true} />
        </div>
      </div>
    </div>
  );
};
export default Index;
