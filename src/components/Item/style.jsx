import styled from "styled-components";
import IconCheck from "../../assets/icon-check.svg";

export const ItemContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const Label = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  padding-left: 45px;
  font-size: 18px;
  color: ${props => props.theme.colors.text};
  line-height: 2.5rem;

  .check {
    position: absolute;
    left: 0;
    top: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.border};

    &:after {
      content: "";
      position: absolute;
      top: 12px;
      left: 10px;
      background-image: url(${IconCheck});
      background-repeat: no-repeat;
      width: 2rem;
      height: 2rem;
      display: none;
    }
  }
`;

export const InputCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .check {
    background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));

    &:after {
      display: block;
    }
  }
`;

export const ButtonRemove = styled.img`
  position: absolute;
  right: 2rem;
  cursor: pointer;
  filter: ${props => props.theme.colors.filter};
`;