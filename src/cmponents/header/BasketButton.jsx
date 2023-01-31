import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Component 6/Busket-Item.svg";

const BusketButton = ({ count, openModal, className }) => {
  return (
    <StyledButton onClick={openModal} className={className}>
      <BasketIcon />
      <span>Your cart</span>
      <StyledCounter id="counter">{count || 0}</StyledCounter>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: #5a1f08;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 30px;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  :hover {
    background-color: #2c0d00;
  }

  :hover > #counter {
    background-color: #672003;
  }

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default BusketButton;

const StyledCounter = styled.span`
  background-color: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  padding: 4px 20px;
  color: #ffffff;
`;
