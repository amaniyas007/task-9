import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <H1>Home</H1>
    </div>
  )
}
const H1 = styled.h1`
  font-size: 48px;
  
`;
export default Home;