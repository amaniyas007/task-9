import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/screens/Header';
import LeftNavbar from './components/screens/LeftNavbar';
import styled from 'styled-components';

function App() {
  return <Router>
    <Container>

      <LeftNavbar/>
      <Wrapper>
        <Header/>
        <Routes>
          <Route />
        </Routes>
      </Wrapper>
    </Container>
      
  </Router>
}

const Container = styled.section`
display: flex;
align-items: start;
justify-content: space-between;`;

const Wrapper = styled.div`
  width: 78%;
`;
export default App