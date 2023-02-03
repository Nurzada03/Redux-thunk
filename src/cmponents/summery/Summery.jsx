import React, { memo } from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/imgs/summary-background.jpg";
import SummeryInfoCard from "./SummeryInfoCard";
const Summery = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImg} />
      <SummeryInfoCard />
    </Container>
  );
};

export default memo(Summery);

const Container = styled.div`
  height: 527px;
`;

const StyledImg = styled.img`
  height: 414px;
  width: 100%;
`;
