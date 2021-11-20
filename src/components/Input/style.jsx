import styled from "styled-components";

export const InputContainer = styled.form`
  width: 40%;

  input {
    background: ${props => props.theme.colors.backgroundContainer};
    color: ${props => props.theme.colors.text};
    margin-top: 1.5rem;
    padding: 1.5rem;
    width: 100%;
    
    border-radius: .5rem;
    font-size: 18px;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;