import { useCallback, useState } from "react";
import React from "react";
import Header from "./cmponents/header/Header";
import Summery from "./cmponents/summery/Summery";
import Meals from "./cmponents/meals/Meals";
import Basket from "./cmponents/basket/Basket";
import styled from "styled-components";
import { BasketProvider } from "./store/BasketContext";

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const showBasketHandler = useCallback(() => {
    setModalVisible((prevState) => !prevState);
  },[]);
  return (
    <div>
      <BasketProvider>
        <Header openModal={showBasketHandler} />

        <Content>
          <Summery />
          <Meals />

          {isModalVisible ? <Basket onClose={showBasketHandler} /> : null}
        </Content>
      </BasketProvider>
    </div>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;

// GET /foods
// GET /basket
// headers: {UserID: 'Nurzada'}/\

// POST /foods/:foodId/addToBasket
// headers: {UserID: 'Nurzada'}/\

// BODY: { amount: number }
// DELETE /basketItem/:id/delete
// headers: {UserID: 'Nurzada'}/\

// PUT /basketItem/:id/update
// BODY: { amount: number }
// */
