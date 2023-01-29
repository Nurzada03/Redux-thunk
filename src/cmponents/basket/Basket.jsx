import styled from "styled-components";

import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({onClose}) => {
  const items = [
    {
      id: "meal1",
      title: "Sushi",
      price: 22.99,
      amount: 1,
    },
    {
      id: "meal2",
      title: "Schnitzel",
      price: 12.99,
      amount: 1,
    },
    {
      id: "meal3",
      title: "Barbecue Burger",
      price: 12.99,
      amount: 1,
    },

    {
      id: "meal4",
      title: "Green Bowl",
      price: 19.99,
      amount: 1,
    },
  ];

  return (
    <>
      <Modal onClose={onClose}>
        <Content>
          {items.length ? (
            <FixedHeightContainer>
              {items.map((item) => {
                return (
                  <BasketItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  />
                );
              })}
            </FixedHeightContainer>
          ) : null}

          <TotalAmount price={200.5034} onClose={onClose} onOrder={() => {}} />
        </Content>
      </Modal>
    </>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
