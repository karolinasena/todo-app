import React from "react";
import { HeaderContainer, HeaderContent, Title, ButtonTheme } from "./style";
import Input from "../Input";
import IconSun from "../../assets/icon-sun.svg";
import IconMoon from "../../assets/icon-moon.svg";

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>Todo</Title>
        <ButtonTheme onClick={props.toggleTheme}>
          {props.themeMode.title === "light" ? (
            <img src={IconMoon} alt="Light Mode" cursor="pointer"/>
        ) : (
          <img src={IconSun} alt="Dark Mode"/>
        )}
        </ButtonTheme>
      </HeaderContent>
      <Input/>
    </HeaderContainer>
  );
}

export default Header;