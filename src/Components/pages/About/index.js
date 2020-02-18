import React from 'react';
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
const TextSection = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const StyledH2 = styled.h2`
  font-size: 4rem;
  margin-bottom: 0;
`;

const Text = styled.p`
  font-size: 1.6rem;
`;

const About = () => {
  return (
    <WhiteSection id="about">
      <TextSection>
        <StyledH2>About Me</StyledH2>
        <Text>
          I am a Software Engineer at Emsi, a data company in Moscow, ID.
          <br />I graduated from the{' '}
          <a href="https://business.wsu.edu/">Carson College of Business</a> at Washington State
          University in the fall of 2017. It wasn't until graduating that I realized i wanted to
          pursue a career is Software Development. Since then, I have dedicated myself to learning
          as much as I possibly can.
        </Text>
        <Text>Check out some of the things I've dug into...</Text>
      </TextSection>
      <SkillsWrapper>
        {skillData.map(skill => (
          <SkillsCard skill={skill} key={skill.id} />
        ))}
      </SkillsWrapper>
    </WhiteSection>
  );
};

export default About;
