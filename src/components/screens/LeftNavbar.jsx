import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'

function LeftNavbar() {
  return (
    <>
        <SectionMain>
            <SectionWrapper>
                <SectionTop>
                  <Logo>
                    <LogoImg src={require("../Assets/Images/logo-comp.png")}/>
                  </Logo>
                </SectionTop>
                <SectionMiddle>
                    <Ul>
                      <Li>
                        <Span>
                          <SpanImage src={require("")}/>
                        </Span>
                        <NavLink>Home</NavLink></Li>
                      <Li>
                        <Span>
                          <SpanImage/>
                        </Span><NavLink>Scheduler</NavLink></Li>
                      <Li>
                        <Span>
                          <SpanImage src={require("../Assets/Images/Component 115.svg")}/>
                        </Span><NavLink>Technology</NavLink></Li>
                      <Li>
                        <Span>
                          <SpanImage src={require("")}/>
                        </Span><NavLink>Rewards</NavLink></Li>
                      <Li>
                        <Span>
                          <SpanImage src={require("")}/>
                        </Span><NavLink>Notes</NavLink></Li>
                      <Li>
                        <Span>
                          <SpanImage src={require("")}/>
                        </Span><NavLink>Submission</NavLink></Li>
                    </Ul>
                </SectionMiddle>
                <SectionBottom>
                  <Div>
                    <NavImage src={require("../Assets/Images/Rectangle 20.jpg")}/>
                  </Div>
                  <BuyPremium>Buy Premium</BuyPremium>
                  <LearnMore>Learn More</LearnMore>
                </SectionBottom>
            </SectionWrapper>
        </SectionMain>
    </>
  )
}
const SectionMain = styled.section`
  width:20%;
  margin: 4px;
  box-shadow: 2px 2px 5px 1px grey;
`;

const SectionWrapper = styled.section`
`;
const SectionTop = styled.section`
  margin: 12px 0 60px;
`;
const Logo = styled.h1`
  width:25%;
  margin: 0 auto;
`;
const LogoImg = styled.img`
  width:100%;
  display:block;
`;
const SectionMiddle = styled.section``;
const Ul = styled.ul`
  width: 50%;
  margin: 0 auto
`;
const Li = styled.li`

`;
const Span = styled.span``;
const SpanImage = styled.img
const SectionBottom = styled.section``;
const Div = styled.div``;
const NavImage = styled.img`
  width:100%;
  display:block;
`;
const BuyPremium = styled.button`
  display:block;
`;
const LearnMore = styled.button`
  display:block;
`;



export default LeftNavbar