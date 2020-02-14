import React, { useState } from 'react';
import styled from 'styled-components';
import WhiteSection from 'Components/atoms/WhiteSection';
import SkillsCard from 'Components/molecules/SkillsCard';
const skillData = [
  {
    id: 1,
    name: 'javascript',
    level: 100,
    description: 'I code in javascript everyday'
  },
  { id: 2, name: 'Node.js', level: 100, description: 'I code in javascript everyday' },
  { id: 3, name: 'React.js', level: 100, description: 'I code in javascript everyday' },
  { id: 4, name: 'CSS', level: 50, description: 'CSS is confusing' }
];

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const About = () => {
  return (
    <WhiteSection>
      <SkillsWrapper>
        {skillData.map(skill => (
          <SkillsCard skill={skill} key={skill.id} />
        ))}
      </SkillsWrapper>
    </WhiteSection>
  );
};

export default About;
