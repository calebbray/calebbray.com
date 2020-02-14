import React, { useState } from 'react';
import styled from 'styled-components';
import Card from 'Components/atoms/Card';
import { deepBlue, white } from 'helpers/colors';

const StyledCard = styled(Card)`
  width: 26rem;

  max-height: 5.5rem;
  margin-right: 0.6rem;
  margin-bottom: 0.4rem;
  padding: 1rem;
  flex-wrap: wrap;
  border-radius: ${props => (props.isOpen ? '5px 5px 0 0' : '5px')};
  &:hover {
    background: ${deepBlue};
    cursor: pointer;
    color: ${white};
    transition: all 0.3s ease-in;
  }
`;

const SkillName = styled.h3`
  font-size: 2rem;
  margin: 0 0 1rem 0;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SkillDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => (props.isOpen ? '5rem' : '0')};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  position: absolute;
  box-shadow: 3px 2px 6px rgba(0, 0, 0, 0.1);
  top: 5.5rem;
  background: white;
  width: 26rem;
  padding: 0 1rem;
  z-index: 1;
  border-radius: 0 0 0.5rem 0.5rem;
`;
const SkillCard = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardWrapper>
      <StyledCard onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <SkillName>{skill.name}</SkillName>
      </StyledCard>
      <SkillDetails isOpen={isOpen}>
        <span>{skill.level / 100}</span>
        <span>{skill.description}</span>
      </SkillDetails>
    </CardWrapper>
  );
};

export default SkillCard;
