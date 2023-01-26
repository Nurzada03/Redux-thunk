import React from 'react'
import styled from 'styled-components'

const SummeryInfoCard = () => {
  return (
    <Card>
      <StyledTitle>Delicious food, delivered to you</StyledTitle>
      <StyledText  >
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </StyledText>
      <StyledTextSecond>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </StyledTextSecond>
    </Card>
  );
}

export default SummeryInfoCard

const Card = styled.div`
  max-width: 53.375rem;
  background: #383838;
  padding: 36px 54px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  position: relative;
  margin: -9rem auto;
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

`;


const StyledTitle = styled.h1`
  font-weight:400;
  font-size: 36px;
  line-height: 54px;

`;

const StyledText = styled.p`
  margin-top: 28px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const StyledTextSecond = styled.p`
  margin-top: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;