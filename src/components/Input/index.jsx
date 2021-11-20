import React, { useState } from "react";
import { InputContainer } from "./style";

const Input = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChangeText = (e) => {
    e.stopPropagation();
    setNewTodo(e.target.value);
  }

  const handleCreateNewTodo = (e) => {
    e.preventDefault();
    props.createTodo(newTodo);
    setNewTodo("");
  }
 
  return (
    <>
      <InputContainer onSubmit={handleCreateNewTodo}>
        <input
          type="text" 
          placeholder="Create a new todo..." 
          value={newTodo}
          onChange={handleChangeText}
        />
      </InputContainer>
    </>
  );
}

export default Input;