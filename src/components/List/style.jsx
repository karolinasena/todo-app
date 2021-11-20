import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 68vh;
  background: ${props => props.theme.colors.background};

  transition: all .3s;
`;

export const ListContainer = styled.ul`
  background: ${props => props.theme.colors.backgroundContainer};
  width: 40%;
  max-height: 27.5rem;
  overflow-y: auto;
  border-radius: .5rem;
  margin-top: -4.5rem;
  margin-bottom: 1.5rem;

  ::-webkit-scrollbar {
    width: 4px;         
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;       
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: hsl(236, 33%, 92%);   
    border-radius: 20px;     
    border: 2px solid hsl(234, 39%, 85%);  
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Empty = styled.h1`
  margin-top: 2rem;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
`;