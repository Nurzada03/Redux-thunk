import React from 'react'
import styled from 'styled-components'
import BusketButton from './BasketButton'

const Header = ({openModal}) => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BusketButton openModal={openModal}> </BusketButton>
    </Container>
  )
}

export default Header

const Container = styled.header`
position:fixed;
z-index: 1;
top:0;
background-color: #8A2B06;
width: 100%;
height: 101px;
display: flex;
justify-content:space-between;
padding-left:120px;
padding-right:120px;
align-items: center;
`
  
const Logo = styled.p`
  
  font-weight: 600;
  font-size:38px;
  line-height: 57px;
  color: #ffff;
  margin: 0;
`