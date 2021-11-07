import React from "react";
import { Container, ListContainer } from "./style";
import Item from "../Item";

const List = () => {
  return (
    <Container>
      <ListContainer>
        <Item/>
      </ListContainer>
    </Container>
  );
}

export default List;