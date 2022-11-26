import React from 'react'
import '../../App.css'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import Slider from "react-slick";
import {NavLink, Outlet} from 'react-router-dom'

function Scheduler () {
  return (
    <div>
      <Helmet>
        <title>Scheduler</title>
      </Helmet>
      <SectionSpotlight>
        <SectionWrapper>
          <H2>New Lessons Board</H2>
          <DivTop>
            <DivContent>
              <DivImgContainer>
                <Image src={require("../Assets/Images/Rectangle 4.jpg")}/>
              </DivImgContainer>
              <H3>Basic Chemistry lll</H3>
              <P>This part of chemistry deals with atomic
                structure and molecular structure.
              </P>
              <SmallDiv>
                <Divround>
                  <ImageRound src={require("../Assets/Images/woman (4) 1.png")}/>
                </Divround>
                <DivRight>
                  <SpanName>By Prof Kenni</SpanName>
                  <TimeDate>8:30, 13th March 2020</TimeDate>
                </DivRight>
              </SmallDiv>
            </DivContent>

            <DivContent>
              <DivImgContainer>
                <Image2 src={require("../Assets/Images/Rectangle 20693.jpg")}/>
              </DivImgContainer>
              <H3>Mechanics in Physics</H3>
              <P>This part of chemistry deals with atomic
                structure and molecular structure.
              </P>
              <SmallDiv>
                <Divround>
                  <ImageRound src={require("../Assets/Images/woman (3).png")}/>
                </Divround>
                <DivRight>
                  <SpanName>By Prof Kenni</SpanName>
                  <TimeDate>8:30, 13th March 2020</TimeDate>
                </DivRight>
              </SmallDiv>
            </DivContent>

            <DivContent>
              <DivImgContainer>
                <Image3 src={require("../Assets/Images/Rectangle 20694.jpg")}/>
              </DivImgContainer>
              <H3>Focus on Words</H3>
              <P>This part of chemistry deals with atomic
                structure and molecular structure.
              </P>
              <SmallDiv>
                <Divround>
                  <ImageRound src={require("../Assets/Images/man.png")}/>
                </Divround>
                <DivRight>
                  <SpanName>By Prof Kenni</SpanName>
                  <TimeDate>8:30, 13th March 2020
                  </TimeDate>
                </DivRight>
              </SmallDiv>
            </DivContent>
          </DivTop>
          <DivBottom>
            <SectionLeft>
              <H>Assignment Manager</H>
                <Ul>
                  <Li>
                    <LinkNav to="pending">Pending</LinkNav>
                  </Li>
                  <Li>
                    <LinkNav to="completed">Completed</LinkNav>
                  </Li>
                  <Li>
                    <LinkNav to="submitted">Submitted</LinkNav>
                  </Li>
                </Ul>
              <SectionRouter>
                <Outlet/>
              </SectionRouter>
            </SectionLeft>

            <SectionRight>
              <Live>
                <LiveSession>Live Session</LiveSession> <GreenCircle></GreenCircle>
              </Live>
              <SectionContent>
              <Lecture>Ongoing Lecture</Lecture>
              <Hr/>
              <SectionPadding>
              <CenterFlex>
                <Left>
                  <ForceMomentum>Force and Momentum revision</ForceMomentum>
                  <Prof><Blue>Physics</Blue>Prof Lee Dan Qi</Prof>
                </Left>
                <Right>
                  <ButtonFlex>
                    <DivPlay>
                      <Playbutton src={require("../Assets/Images/playbutton.png")}/>
                    </DivPlay>
                    <Join>Join</Join>
                  </ButtonFlex>
                </Right>
              </CenterFlex>
              <Hr/>
              <Level>
                <Line>
                  <CheckGreenContainer>
                    <CheckGreenImage src={require("../Assets/Images/icongreen.svg")}/>
                  </CheckGreenContainer>
                  <SIUnits>Force and unit</SIUnits>
                  <Time>03:40min</Time>
                  <Buttonbggrey>Medium</Buttonbggrey>
                </Line>

                <Line>
                  <CheckGreyContainer>
                    <CheckGreyImage src={require("../Assets/Images/icongrey.svg")}/>
                  </CheckGreyContainer>
                  <SIUnits>Mass and acceleration</SIUnits>
                  <Time>06:08min</Time>
                  <Buttonbgdarkgrey>Hard</Buttonbgdarkgrey>
                </Line>

                <Line>
                  <CheckGreyContainer>
                    <CheckGreyImage src={require("../Assets/Images/icongrey.svg")}/>
                  </CheckGreyContainer>
                  <SIUnits>Gain of Momentum</SIUnits>
                  <Time>09:30min</Time>
                  <Buttonbggrey>Medium</Buttonbggrey>
                </Line>
              </Level>
              </SectionPadding>
            </SectionContent>
            </SectionRight>
            
          </DivBottom>
        </SectionWrapper>
      </SectionSpotlight>
    </div>
  )
}
const SectionSpotlight = styled.section``;
const SectionWrapper = styled.section`
  width: 91%;
  margin: 0 auto;
`;
const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
`;
const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DivContent = styled.div`
  width: 32%;
  box-shadow: 0 3px 60px 3px #d6cdcdc9;
  padding-bottom: 30px;
`;
const DivImgContainer = styled.div`
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const Image2 = styled.img`
  width: 100%;
  height: 199.09px;
  display: block;
`;
const Image3 = styled.img`
  width: 100%;
  height: 199.09px;
  display: block;
`;
const H3 = styled.h3`
  font-weight: 700;
  margin: 15px auto;
  width: 87%;
  font-size: 16px;  
`;
const P = styled.p`
  color: #9E9696;
  width: 87%;
  margin: 0 auto;
`;
const SmallDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 12px 0 0 20px;
`;
const Divround = styled.div`
  width: 26%;
`;
const ImageRound = styled.img`
  width: 100%;
  display: block;
`;
const DivRight = styled.div`
`;
const SpanName = styled.span`
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin: 9px 0;
`;
const TimeDate = styled.span`
display: block;
color: #9E9696;
font-size: 14px;
`;
const DivBottom = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;

`;
const SectionLeft = styled.section`
  width: 48%;
`;
const H = styled.h3`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 24px;
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 32px;
`;
const Li = styled.li``;
const SectionRouter = styled.section`
  
`;
const LinkNav = styled(NavLink)`
  color: #9E9696;
  font-weight: 700;
  font-size: 14px
`;

const SectionRight = styled.section`
  width: 48%;
`;
const Live = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 27%;
`;
const LiveSession = styled.h3`
  font-weight: 700;
  font-size: 20px;
`;
const GreenCircle = styled.div`
  Width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #59F195;
`;
const SectionContent = styled.section`
  box-shadow: 0 3px 60px 3px #d6cdcdc9;
`;
const SectionPadding = styled.section`
padding: 28px;
`
;
const Lecture = styled.h4`
  font-weight: 700;
  font-size: 17px;
  padding: 18px 0 18px 18px;
`;
const Hr = styled.hr`
  border-bottom: 2px solid #000;
`;
const CenterFlex = styled.div``;
const Left = styled.div``;
const ForceMomentum = styled.span``;
const Prof = styled.span``;
const Blue = styled.small``;
const Right = styled.div``;
const ButtonFlex = styled.div``;
const DivPlay = styled.div``;
const Playbutton = styled.img``;
const Join = styled.button``;
const Level = styled.section``;
const Line = styled.div``;
const CheckGreenContainer = styled.div``;
const CheckGreenImage = styled.img``;
const SIUnits = styled.p``;
const Time = styled.span``;
const Buttonbggrey = styled.button``;
const CheckGreyContainer = styled.div``;
const CheckGreyImage = styled.img``;
const Buttonbgdarkgrey = styled.button``;


export default Scheduler;