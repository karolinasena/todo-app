import React from "react";
import AppContext from "./Context";
import usePersistedTasks from "../utils/usePersistedTasks";

const AppProvider = ({ children }) => {
  const [item, setItems] = usePersistedTasks('tasks', []);

  const createTodoContext = (newItem) => {
    setItems([...item, newItem]);
  }

  const removeTodoContext = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setItems([...tasks]);
  }

  const taskCompleted = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    
    tasks[index].completed = !tasks[index].completed;  

    localStorage.setItem('tasks', JSON.stringify(tasks));
   
    setItems([...tasks]);
  }

  return (
    <AppContext.Provider value={{ item, createTodoContext, removeTodoContext, taskCompleted }}>
      {children}
    </AppContext.Provider>

  );
}

export default AppProvider;