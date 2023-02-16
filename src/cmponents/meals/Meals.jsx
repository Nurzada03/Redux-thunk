import React, { memo, useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { getMeals } from "../../store/meals/mealsReduser";
import MealItem from "./meal-Item/MealItem";

const Meals = () => {
  const dispatch = useDispatch();

  const { meals, isLoading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <>
      <Card>
        {isLoading && !error && <p>Loading..</p>}

        {meals.map((meal) => {
          return <MealItem key={meal._id} meal={meal} id={meal._id} />;
        })}
      </Card>
    </>
  );
};

export default memo(Meals);

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 75%;
  margin: 40px auto;
  padding: 40px 40px 10px 40px;
`;
