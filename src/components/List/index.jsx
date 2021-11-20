import React from "react";
import { Container, ListContainer, Empty } from "./style";
import Item from "../Item";

const List = ( props ) => {
  return (
    <Container>
      {props.todos.length > 0 ? (
        <ListContainer>
          {props.todos.map((todo, index) => {
            return (
            <Item
              key={index}
              text={todo} 
              index={index} 
              todos={props.todos}
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