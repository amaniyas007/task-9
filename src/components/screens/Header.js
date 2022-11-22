import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <>
    <Header>
        <Ul>
            <Li>
                <A>
                    <Span ClassName="Image">
                        <Img scr={require("../../Assets/")}  />
                    </Span>
                    <Span ClassName="Image">
                        <Img scr={require("../../Assets/")} />
                    </Span>
                    <Span ClassName="Image">
                        <Img scr={require("../../Assets/")} />
                    </Span>
                </A>
            </Li>
        </Ul>
    </Header>
    </>
  )
}
const Header = styled.header``;
const Ul = styled.ul``;
const Li  = styled.ul``;



export default Header