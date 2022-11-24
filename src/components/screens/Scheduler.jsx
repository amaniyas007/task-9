import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import Slider from "react-slick";


function Scheduler () {
  return (
    <div>
      <Helmet>
        <title>Scheduler</title>
      </Helmet>
      <H1>Scheduler</H1>
      <Div>
        <Img src={require("../Assets/Images/Rectangle 4.jpg")}/>
      </Div>
    </div>
  )
}
const H1 = styled.h1`
  font-size: 48px;
  
`;
const Div = styled.div``;
const Img = styled.img``;
export default Scheduler;