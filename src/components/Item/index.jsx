import React, { useState } from "react";
import { ButtonRemove, InputCheckbox, ItemContainer, Label } from "./style";
import IconRemove from "../../assets/icon-cross.svg"; 

const Item = (props) => {
  const [item, setItem] = useState(props.todos);
  
  return (
    <ItemContainer>
      <Label>
        <InputCheckbox type="checkbox" id="input-checkbox"/>
        <p>{ item[props.index] }</p>
        <span className="check"></span>
      </Label>
      
      <ButtonRemove src={IconRemove} alt="Remover TODO"/>
    </ItemContainer>
  );
}

export default Item;