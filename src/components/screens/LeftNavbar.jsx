import React from 'react'
import styled from 'styled-components'

function LeftNavbar() {
  return (
    <>
        <SectionMain>
          <SectionShadow>
            <SectionWrapper>
                <SectionTop>
                  <Logo>
                    <LogoImg src={require("../Assets/Images/logo-comp.png")}/>
                  </Logo>
                </SectionTop>
                <SectionMiddle></SectionMiddle>
                <SectionBottom></SectionBottom>
            </SectionWrapper>
          </SectionShadow>
        </SectionMain>
    </>
  )
}
const SectionMain = styled.section`
height: 100vh;
width: 200px;

`;
const SectionShadow = styled.section`
  width:95%;
  margin: 0 auto;
  box-shadow: 0 0 5px 10px grey;
`;
const SectionWrapper = styled.section`
  width: 90% ;
  margin: 10px auto;
`;
const SectionTop = styled.section``;
const Logo = styled.h1`
  display:block;
  
`;
const LogoImg = styled.img`
  width:100%;
  display:block;
`;
const SectionMiddle = styled.section``;
const SectionBottom = styled.section``;



export default LeftNavbar