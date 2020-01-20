import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 4.5rem;
  background: #204354;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: #ffffff;
  z-index: 1;
`;

const StyledHeaderText = styled.h1`
  font-size: 2rem;
  z-index: 2;
`;

const StyledSubText = styled.span`
  font-size: 1.4rem;
  z-index: 2;
`;

function GlobalHeader() {
  return (
    <StyledDiv>
      <StyledHeaderText>Hey, I'm Caleb</StyledHeaderText>
      <StyledSubText>Check out what I've been up to...</StyledSubText>
    </StyledDiv>
  );
}

export default GlobalHeader;
