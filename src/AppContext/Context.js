import { createContext } from "react";

const AppContext = createContext({
    todos: null,
    createTodoContext: () => {}
});

export default AppContext;