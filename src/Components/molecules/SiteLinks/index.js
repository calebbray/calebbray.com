import React, { useState } from 'react';
import styled from 'styled-components';

import Link from 'Components/atoms/Link';
import { white } from 'helpers/colors';

const NavWrapper = styled.nav`
  width: 50%;
  position: fixed;
  left: 45%;
  top: ${props => (props.visible ? '0' : '-5rem')};
  transition: top 0.6s;
`;
const StyledList = styled.ol`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 1rem;
  color: #ffffff;
`;
const StyledListItem = styled.li`
  font-size: 1.2rem;
  position: relative;
`;

const SiteLinks = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <NavWrapper
      onScroll={window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;
        const shouldBeVisible = prevScrollPos >= currentScrollPos;
        setPrevScrollPos(currentScrollPos);
        setIsVisible(shouldBeVisible);
      })}
      visible={isVisible}
    >
      <StyledList>
        <StyledListItem>
          <Link href="#about" linkColor={white}>
            About
          </Link>
        </StyledListItem>
        {/* <StyledListItem>Test Link</StyledListItem>
        <StyledListItem>Test Link</StyledListItem>*/}
      </StyledList>
    </NavWrapper>
  );
};

export default SiteLinks;
