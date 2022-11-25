import React from 'react'
import styled from 'styled-components';
function Pending() {
  return (
  <>
    <DivMain>
        <DivFlex>
            <DivLeft>
                <Flex>
                    <H4>Basic Physics lll</H4>
                    <DivLoading>
                        <SpanDarkBlue></SpanDarkBlue>
                    </DivLoading>
                </Flex>
                <Due>Final assessment | Due 14th March 2020</Due>
            </DivLeft>
            <DivRight>
                <Resume>Resume</Resume>
            </DivRight>
        </DivFlex>
        <DivFlex>
            <DivLeft>
                <Flex>
                    <H4>Mental Math l</H4>
                    <DivLoading>
                        <SpanDarkBlue></SpanDarkBlue>
                    </DivLoading>
                </Flex>
                
                <Due>Class test | Due Tomorrow</Due>
            </DivLeft>
            <DivRight>
                <Start>Start</Start>
            </DivRight>
        </DivFlex>
    </DivMain>
  </>
  )
}
const DivMain = styled.div`
    box-shadow: 0 3px 60px 3px #d6cdcdc9;
    padding: 55px 36px 20px;
`;
const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const DivLeft = styled.div`
    width:70%;
`;
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const H4 = styled.h4`
    font-size: 14px;
    font-weight: 700;
    width: 50%;
`;
const DivLoading = styled.div`
    width: 40%;
    height: 10px;
    background: grey;
    border-radius: 6px;
`;
const SpanDarkBlue = styled.div`
    background: blue;
    border-radius: 6px;
    height: 10px;
    width: 70%;
`;
const Due = styled.small``;
const DivRight = styled.div`
    width:20%;

`;
const Resume = styled.button``;
const Start = styled.button``;
export default Pending