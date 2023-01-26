
import React from "react";
import Header from "./cmponents/header/Header";
import Summery from "./cmponents/summery/Summery";
import Meals from "./cmponents/meals/Meals";
import Basket from "./cmponents/basket/Basket";
import styled from "styled-components";

function App() {
  return (
  <div>
<Header/>

<Content>
<Summery/>
<Meals/>

      <Basket/>    
</Content>
    

  </div>
  );
}

export default App;

const Content = styled.div`
margin-top:101px;

`