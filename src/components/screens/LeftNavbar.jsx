import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Logos from '../Assets/Images/Component 115.svg';
import Logos1 from '../Assets/Images/Component 117.svg';
import Logos2 from '../Assets/Images/Component 118.svg';
import Logos3 from '../Assets/Images/Food-Site.svg';
import Logos5 from '../Assets/Images/trophy-svgrepo-com.svg';

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
                        <LeftLogoContainer>
                          <LeftLogoImage src={Logos5}/>
                        </LeftLogoContainer>
                        <LinkNav>Home</LinkNav>
                        </Li>
                      <Li>
                        <LeftLogoContainer>
                          <LeftLogoImage  src={Logos3} />
                        </LeftLogoContainer>
                        <LinkNav>Scheduler</LinkNav>
                        </Li>
                      <Li>
                        <LeftLogoContainer>
                          <LeftLogoImage  src={Logos} alt="Image"/>
                        </LeftLogoContainer>
                        <LinkNav>Technology</LinkNav>
                        </Li>
                      <Li>
                        <LeftLogoContainer>
                          <LeftLogoImage src={Logos5}/>
                        </LeftLogoContainer>
                        <LinkNav>Rewards</LinkNav>
                        </Li>
                      <Li>
                        <LeftLogoContainer>
                          <LeftLogoImage  src= {Logos1}  />
                        </LeftLogoContainer>
                        <LinkNav>Notes</LinkNav>
                        </Li>
                      <Li>
                        <LeftLogoContainer>
                          <LeftLogoImage  src={Logos2}  alt="Image"/>
                        </LeftLogoContainer>
                        <LinkNav>Submission</LinkNav>
                        </Li>
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
  box-shadow: 0px 3px 10px 3px #d6cdcdc9;
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
  width: 43%;
  margin: 0 auto
`;
const Li = styled.li`
  display: flex;
  justify-content : space-between;
  margin-bottom: 32px;
  color: #9E9696;
`;
const LinkNav = styled(NavLink)`
  color: #9E9696;
  font-weight: 600;
`;
const LeftLogoContainer = styled.div`
  width: 15%;
`;
const LeftLogoImage = styled.img`
  width: 100%;
  display: block;
`;
const SectionBottom = styled.section`
  width: 75%;
  margin: 65px 2px 30px 68px;
  box-shadow: 0px 3px 3px 2px #d6cdcdc9;
  text-align: center;
  border-radius: 4px;
`;
const Div = styled.div`
  width: 40%;
  margin: 0 auto;

`;
const NavImage = styled.img`
  width:100%;
  display:block;
`;
const BuyPremium = styled.button`
  display: block;
  padding: 12px;
  background: #5C75FB;
  color: white;
  border-radius: 6px;
  font-weight: 600;
  margin: 24px auto;
`;
const LearnMore = styled(Link)`
  color: #5C75FB;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 24px;
`;



export default LeftNavbar