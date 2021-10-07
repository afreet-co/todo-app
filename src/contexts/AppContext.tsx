import { createContext, FC, useContext, useEffect, useState } from "react";

export type FilterType = "all" | "active" | "completed";

export type Todo = {
  isCompleted: boolean;
  text: string;
  id: number;
  order: number;
};

export type AppContextType = {
  todos: Todo[];
  addNew: (text: string, isCompleted: boolean) => void;
  filter: FilterType;
  setFilter: (type: FilterType) => void;
  clearCompleted: () => void;
  itemsLeft: number;
  removeItem: (id: number) => void;
  toggleIsCompleted: (id: number) => void;
  reorderTodos: (newDos: Readonly<Todo[]>) => void;
};

const sampleTodos: Todo[] = [
  { id: 1, order: 1, isCompleted: false, text: "Jog around the park 5x" },
  { id: 2, order: 2, isCompleted: true, text: "10 minutes meditation" },
  { id: 3, order: 3, isCompleted: true, text: "Read for 1 hour" },
  { id: 4, order: 4, isCompleted: false, text: "Pick up groceries" },
  {
    id: 5,
    order: 5,
    isCompleted: true,
    text: "Create Todo App on Frontend Mentor",
  },
  { id: 6, order: 6, isCompleted: true, text: "Create Mentor" },
];

const initialValues: AppContextType = {
  todos: [],
  addNew: (text, isCompleted) => {},
  filter: "all",
  setFilter: (type) => {},
  clearCompleted: () => {},
  itemsLeft: 0,
  removeItem: (id: number) => {},
  toggleIsCompleted: (id: number) => {},
  reorderTodos: (newDos: Readonly<Todo[]>) => {},
};

export const AppContext = createContext<AppContextType>(initialValues);

export const AppContextProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(sampleTodos);
  const [filter, setFilter] = useState<FilterType>("all");
  const [itemsLeft, setItemsLeft] = useState<number>(0);

  useEffect(() => {
    setItemsLeft(todos.filter((i) => !i.isCompleted).length);
  }, [todos]);
  const addNew = (text: string, isCompleted: boolean) => {
    setTodos((prev) => [
      ...prev,
      {
        id: todos.length + 1,
        order: todos.length + 1,
        isCompleted,
        text,
      },
    ]);
  };

  const clearCompleted = () => {
    setTodos((prev) => [...prev.filter((i) => !i.isCompleted)]);
  };

  const removeItem = (id: number) => {
    setTodos((prev) => [...prev.filter((i) => i.id !== id)]);
  };

  const toggleIsCompleted = (id: number) => {
    let item = todos.find((i) => i.id === id);
    item = { ...item, isCompleted: !item.isCompleted };
    setTodos((prev) =>
      [...prev.filter((i) => i.id !== id), item].sort(
        (a, b) => a.order - b.order
      )
    );
  };
  const reorderTodos = (newDos: Readonly<Todo[]>) => {
    const newTodos = newDos.map((item, index) => ({
      ...item,
      order: index + 1,
    }));
    setTodos(newTodos);
  };

  return (
    <AppContext.Provider
      value={{
        addNew,
        todos,
        filter,
        clearCompleted,
        itemsLeft,
        removeItem,
        toggleIsCompleted,
        setFilter: (type) => setFilter(type),
        reorderTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
