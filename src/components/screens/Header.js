import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <>
    <HeaderSection>
        <Div>
            <Ul>
                <Li>
                    <ImageContainer >
                        <Img src={require('../Assets/Images/setting.png')}  alt="Image"/>
                    </ImageContainer>
                </Li>
                <Li>
                    <ImageContainer >
                        <Img src={require('../Assets/Images/bell.png')}  alt="Image"/>
                    </ImageContainer>
                </Li>
                <Li>
                    <ImageContainer >
                        <Img src={require('../Assets/Images/man.png')}  alt="Image"/>
                    </ImageContainer>
                </Li>
           </Ul> 
        </Div>
        
    </HeaderSection>
    </>
  )
}
const HeaderSection = styled.header`
    height: 100px; 
`;
const Div = styled.div`
    width:90%;
    margin: 0 auto;

`;
const Ul = styled.ul`
    display: flex;
    flex-direction: row-reverse;
`;
const Li  = styled.li`
    margin-right:20px;
    &:last-child() {
        margin-right:0;
    }
`;
const ImageContainer  = styled.div`
width: 30px;
`;
const Img  = styled.img`
width: 100%;
display: block;
border-radius: 50%;
 `;

export default Header 