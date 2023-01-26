import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";


const MealItem = ({ meal }) => {
  return (
    <Container>
      <StyledItem>
        <StyledTitle>{meal.title}</StyledTitle>
        <StyledDescription>{meal.description}</StyledDescription>
        <StyledPrice>${meal.price}</StyledPrice>
      </StyledItem>
      <div>
        <MealItemForm id={meal.id} />
      </div>
    </Container>
  );
};

export default MealItem;

const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
margin-bottom:20px;

:last-child{
border:none
}

`;

const StyledItem = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 16px;
    font-style: italic;
    font-weight: 400px;
    line-height: 24px;
    margin: 0;
  }

`;


const StyledTitle = styled.h4`
  font-weight: 400px;
  font-size: 18x;
  line-height: 27px;
  color:#222222;
`;

const StyledPrice = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  color: #ad5502;
`;

const StyledDescription = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;


  color: #222222;
`;
