import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1a2c3c;
`;

const HiMyNameIs = styled.h2`
  color: #ffffff
  font-size: 10rem;
  margin: 0;
  letter-spacing: 0.5rem;
`;

const Subtext = styled.span`
  font-size: 1.8rem;
  color: #ffffff;
  letter-spacing: 1rem;
`;
const Banner = () => {
  return (
    <StyledDiv>
      <HiMyNameIs>Caleb Bray</HiMyNameIs>
      <Subtext>SOFTWARE ENGINEER</Subtext>
    </StyledDiv>
  );
};

export default Banner;
