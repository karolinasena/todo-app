import styled from "styled-components";

export const InputContainer = styled.input`
  background: hsl(237, 14%, 26%);
  color: hsl(234, 39%, 85%);
  margin-top: 1.5rem;
  padding: 1.5rem;
  width: 40%;
  border-radius: .5rem;
  font-size: 18px;

  @media (max-width: 800px) {
    width: 80%;
  }
`;