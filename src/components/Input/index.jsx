import React, { useState, useContext } from "react";
import { InputContainer } from "./style";
import AppContext from "../../AppContext/Context";

const Input = () => {
  const { createTodoContext } = useContext(AppContext);

  const [newItem, setNewItem] = useState({});

  const handleChangeText = (e) => {
    e.stopPropagation();
    setNewItem({ name: e.target.value, completed: false });
  }

  const handleCreateNewItem = (e) => {
    e.preventDefault();
    createTodoContext(newItem);
    setNewItem({ name: "", completed: false });
  }

  return (
    <InputContainer onSubmit={handleCreateNewItem}>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={newItem.name}
        onChange={handleChangeText}
      />
    </InputContainer>
  );
}

export default Input;