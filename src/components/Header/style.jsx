import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-image: ${props => props.theme.images.imageUrl};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 38vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 475px) {
    background-image: ${props => props.theme.images.imageUrlMobile};
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
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: hsl(0, 0%, 98%);
`;

export const ButtonTheme = styled.span`
  cursor: pointer;
`;