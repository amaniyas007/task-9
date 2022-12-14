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
                    <LinkNav className={({ isActive }) => isActive ? "active" : ""} to="/">Home</LinkNav>
                    </Li>
                  <Li>
                    <LeftLogoContainer>
                      <LeftLogoImage  src={Logos3} />
                    </LeftLogoContainer>
                    <LinkNav className={({ isActive }) => isActive ? "active" : ""} to="scheduler">Scheduler</LinkNav>
                    </Li>
                  <Li>
                    <LeftLogoContainer>
                      <LeftLogoImage  src={Logos} alt="Image"/>
                    </LeftLogoContainer>
                    <LinkNav className={({ isActive }) => isActive ? "active" : ""} to="technology">Technology</LinkNav>
                    </Li>
                  <Li>
                    <LeftLogoContainer>
                      <LeftLogoImage src={Logos5}/>
                    </LeftLogoContainer>
                    <LinkNav className={({ isActive }) => isActive ? "active" : ""} to="rewards">Rewards</LinkNav>
                    </Li>
                  <Li>
                    <LeftLogoContainer>
                      <LeftLogoImage  src= {Logos1}  />
                    </LeftLogoContainer>
                    <LinkNav className={({ isActive }) => isActive ? "active" : ""} to="notes">Notes</LinkNav>
                    </Li>
                  <LiLast>
                    <LeftLogoContainer>
                      <LeftLogoImage  src={Logos2}  alt="Image"/>
                    </LeftLogoContainer>
                    <LinkNav className={({ isActive }) => isActive ? "active" : ""} to="submission">Submission</LinkNav>
                    </LiLast>
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
  width: 19%;
  margin: 4px;
  box-shadow: 0px 3px 10px 3px #d6cdcdc9;
  padding-bottom: 90px;
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
  width: 65%;
  margin: 0 auto;
  
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  color: #9E9696;
`;
const LiLast = styled.li`
  margin-bottom: 0;
  display: flex;
  align-items: center;
  color: #9E9696;
`;
const LinkNav = styled(NavLink)`
  color: #9E9696;
  font-weight: 500;
  font-size: 15px;
`;
const LeftLogoContainer = styled.div`
  width: 15%;
  margin-right: 32px;
`;
const LeftLogoImage = styled.img`
  width: 100%;
  display: block;
`;
const SectionBottom = styled.section`
  width: 75%;
  margin: 85px 2px 30px 57px;
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
  font-size: 13px;
`;
const LearnMore = styled(Link)`
  color: #5C75FB;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 24px;
  font-size: 13px;
`;



export default LeftNavbar