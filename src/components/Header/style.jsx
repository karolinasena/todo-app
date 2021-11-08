import styled from "styled-components";
import Background from "../../assets/bg-desktop-dark.jpg";
import BackgroundMobile from "../../assets/bg-mobile-dark.jpg";

export const HeaderContainer = styled.header`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 38vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 475px) {
    background-image: url(${BackgroundMobile});
  }
`;

export const HeaderContent = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  color: hsl(0, 0%, 98%);
`;

export const ButtonTheme = styled.img`
  cursor: pointer;
`;

