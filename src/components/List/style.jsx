import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 68vh;
`;

export const ListContainer = styled.ul`
  background: hsl(237, 14%, 26%);
  width: 40%;
  max-height: 32rem;
  border-radius: .8rem;
  margin-top: -4rem;

  @media (max-width: 800px) {
    width: 80%;
  }
`;