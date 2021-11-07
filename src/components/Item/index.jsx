import React from "react";
import { InputCheckbox, ItemContainer, Label } from "./style";

const Item = () => {
  return (
    <ItemContainer>
      <InputCheckbox type="checkbox" id="input-checkbox"/>
      <Label htmlFor="input-checkbox"></Label>
    </ItemContainer>
  );
}

export default Item;