import React from 'react';
import styled from 'styled-components';
import { deepBlue, white } from 'helpers/colors';

const StyledSection = styled.section`
  background: ${white};
  color: ${deepBlue};
  margin: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Margins = styled.div`
  width: 80%;
  margin: auto;
`;

const WhiteSection = ({ children }) => (
  <StyledSection>
    <Margins>{children}</Margins>
  </StyledSection>
);
export default WhiteSection;
