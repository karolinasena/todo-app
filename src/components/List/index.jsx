import React, { useContext } from "react";
import { Container, ListContainer, Empty } from "./style";
import Item from "../Item";
import AppContext from "../../AppContext/Context";

const List = () => {
  const { item } = useContext(AppContext);

  return (
    <Container>
      {item.length > 0 ? (
        <ListContainer>
          {item.map((todo, index) => {
            return (
            <Item
              key={index}
              text={todo} 
              index={index} 
             /> 
            )
          })}
        </ListContainer>
      ) : (
        <Empty>
          You don't have a todo list yet.
        </Empty>
      )}    
    </Container>
  );
}

export default List;