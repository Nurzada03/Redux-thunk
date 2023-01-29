import React from 'react' 
import { ReactComponent as IconPlus } from "../../../assets/icons/Vector.svg";

import styled from 'styled-components';
import Button from '../../UI/Button';

const MealItemForm = ({id}) => {
  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor={id}>Amount</label>
        <input type="number" id={id} min={1} max={5} defaultValue={1} />
      </StyledInputContainer>

      <Button>
        <IconPlus />
        Add
      </Button>
    </StyledForm>
  );
}

export default MealItemForm

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
padding:4px 12px;
outline:none;

color: #222222;
  }
`
  
const StyledForm = styled.form`
    display: flex;
    flex-direction:column;
    align-items: flex-end

`