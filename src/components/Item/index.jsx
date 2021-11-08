import React from "react";
import { ButtonRemove, InputCheckbox, ItemContainer, Label } from "./style";
import IconRemove from "../../assets/icon-cross.svg"; 

const Item = () => {
  return (
    <ItemContainer>
      <Label>
        Complete Todo App on Frontend Mentor
        <InputCheckbox type="checkbox" id="input-checkbox"/>
        <span className="check"></span>
      </Label>
      
      <ButtonRemove src={IconRemove} alt="Remover TODO"/>
    </ItemContainer>
  );
}

export default Item;