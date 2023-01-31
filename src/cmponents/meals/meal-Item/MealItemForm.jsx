import React, { useState, useContext } from "react";
import { ReactComponent as IconPlus } from "../../../assets/icons/Vector.svg";
import { BasketContext } from "../../../store/BasketContext";
import styled from "styled-components";
import Button from "../../UI/Button";

const MealItemForm = ({ id, title, price }) => {
  const { addToBasket } = useContext(BasketContext);

  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (e) => {
    setAmount(+e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); 

    const basketItem = {
      id,
      price,
      title,
      amount,
    };

    addToBasket(basketItem);
  };


return (
  <StyledForm onSubmit={submitHandler}>
    <StyledInputContainer>
      <label htmlFor={id}>Amount</label>
      <input
        value={amount}
        onChange={amountChangeHandler}
        type="number"
        id={id}
        min={1}
        max={5}
        // defaultValue={1}
      />
    </StyledInputContainer>

    <Button>
      <IconPlus />
      Add
    </Button>
  </StyledForm>
);
}
export default MealItemForm;

// const StalyedIcon = styled(IconPlus)`
//   margin-right: 10px;
// `;
const StyledInputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
  label {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    color: #222222;
  }
  input {
    background: #ffffff;
    border-radius: 6px;
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 4px 12px;
    outline: none;

    color: #222222;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
