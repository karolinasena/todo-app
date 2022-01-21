import React, { useContext, useEffect } from "react";
import { ButtonRemove, InputCheckbox, ItemContainer, Label } from "./style";
import IconRemove from "../../assets/icon-cross.svg";
import AppContext from "../../AppContext/Context";

const Item = ({ index }) => {
  const { item, removeTodoContext, taskCompleted } = useContext(AppContext);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const input = document.querySelectorAll("input[type=checkbox]");

    if (tasks.length > 0) {
      if (tasks[index].completed) {
        input[index].setAttribute("checked", "checked");
      } 
    }
  }, []);

  return (
    <ItemContainer>
      <Label>
        <InputCheckbox type="checkbox" id="input-checkbox" onClick={() => taskCompleted(index)} />
        <p>{item[index].name}</p>
        <span className="check"></span>
      </Label>

      <ButtonRemove src={IconRemove} alt="Remover TODO" onClick={() => { removeTodoContext(index) }} />
    </ItemContainer>
  );
}

export default Item;