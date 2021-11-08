import React from "react";
import { HeaderContainer, HeaderContent, Title, ButtonTheme } from "./style";
import IconSun from "../../assets/icon-sun.svg";
import Input from "../Input";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>T O D O</Title>
        <ButtonTheme src={IconSun} alt="Light Mode"/>
      </HeaderContent>
      <Input/>
    </HeaderContainer>
  );
}

export default Header;