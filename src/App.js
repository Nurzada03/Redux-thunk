import { useState } from "react";
import React from "react";
import Header from "./cmponents/header/Header";
import Summery from "./cmponents/summery/Summery";
import Meals from "./cmponents/meals/Meals";
import Basket from "./cmponents/basket/Basket";
import styled from "styled-components";

function App() {

const [isModalVisible, setModalVisible] = useState(false);

const addMealHandler = () => {
  setModalVisible((prevState) => !prevState);
};
  return (
    <div>
      <Header openModal={addMealHandler} />

      <Content>
        <Summery />
        <Meals />

        {isModalVisible ? <Basket onClose={addMealHandler} /> : null}
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
margin-top:101px;

`