import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { fetchApi } from "../../lib/fetchApi";
import MealItem from "./meal-Item/MealItem";


const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const getMeals = async () => {
    try {
      setLoading(true);

      const response = await fetchApi("foods");
      setMeals(response.data);

      setLoading(false);
    } catch (error) {
      setError("Failed to load meals");
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

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

export default Meals;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 75%;
  margin: 40px auto;
  padding: 40px 40px 10px 40px;
`;
