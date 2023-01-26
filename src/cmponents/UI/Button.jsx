import React from "react";
import styled from "styled-components";

const Button = ({children}) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: #8a2b06;
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 20px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #7e2a0a;
  }
  :active {
    background: #993108;
  }
`;
