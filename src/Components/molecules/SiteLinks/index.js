import React, { useState } from 'react';
import styled from 'styled-components';

import Link from 'Components/atoms/Link';
import { white, deepBlue } from 'helpers/colors';

const NavWrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: ${props => (props.visible ? '0' : '-5rem')};
  transition: top 0.6s;
  background: ${deepBlue};
`;

const StyledList = styled.ol`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 1.5rem 2rem;
  color: #ffffff;
`;
const StyledListItem = styled.li`
  font-size: 1.2rem;

  &:not(:last-of-type) {
    margin-right: 10rem;
  }
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
        {/*<StyledListItem>
            <Link>Test Link</Link>
          </StyledListItem>
           <StyledListItem>Test Link</StyledListItem>*/}
      </StyledList>
    </NavWrapper>
  );
};

export default SiteLinks;
