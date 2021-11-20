import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { HeaderContainer, HeaderContent, Title, ButtonTheme } from "./style";
import Input from "../Input";
import IconSun from "../../assets/icon-sun.svg";
import IconMoon from "../../assets/icon-moon.svg";

const Header = ({ themeMode, toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>Todo</Title>
        <ButtonTheme onClick={toggleTheme}>
          {themeMode.title === "light" ? (
            <img src={IconMoon} alt="Light Mode" cursor="pointer"/>
        ) : (
          <img src={IconSun} alt="Dark Mode"/>
        )}
        </ButtonTheme>
      </HeaderContent>
      <Input />
    </HeaderContainer>
  );
}

export default Header;