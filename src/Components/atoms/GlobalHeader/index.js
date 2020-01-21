import React from 'react';
import styled from 'styled-components';

import HeaderLink from '../HeaderLink';
import { routes } from '../../../routes';

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
`;

function GlobalHeader() {
  return (
    <StyledDiv>
      <HeaderLink to="/">
        <StyledHeaderText>Hey, I'm Caleb</StyledHeaderText>
      </HeaderLink>
      {routes.map(
        (route, i) =>
          route.displayOnMenu && (
            <HeaderLink key={i} to={route.path}>
              {route.text}
            </HeaderLink>
          )
      )}
    </StyledDiv>
  );
}

export default GlobalHeader;
