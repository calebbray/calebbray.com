import React, { useState } from 'react';
import styled from 'styled-components';
import Card from 'Components/atoms/Card';
import Link from 'Components/atoms/Link';
// import { deepBlue, white } from 'helpers/colors';

const StyledCard = styled(Card)`
  width: 26rem;
  margin-right: 0.6rem;
  margin-bottom: 0.4rem;
  flex-wrap: wrap;
  border-radius: ${props => (props.isOpen ? '5px 5px 0 0' : '5px')};
`;

const SkillName = styled.h3`
  font-size: 2.5rem;
  margin: 0 0 1rem 1rem;
`;

const SkillDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const StyledHr = styled.hr`
  width: 100%;
`;

const StyledLink = styled(Link)`
  margin: 0.5rem;
  padding: 0.2rem;
`;

const BackgroundImage = styled.div`
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(26, 44, 60, 0.5)),
    url(${props => props.backgroundUrl});
  height: 10rem;
  border-radius: 5px 5px 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SkillCard = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledCard onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <BackgroundImage
        backgroundUrl={`https://calebbray-skill-images.s3-us-west-2.amazonaws.com/${skill.attributes.name
          .toLocaleLowerCase()
          .replace('.', '_')}.png`}
      >
        <SkillName>{skill.attributes.name}</SkillName>
      </BackgroundImage>
      <SkillDetails isOpen={isOpen}>
        <span>{String(skill.attributes.rating / 100)}</span>
        <span>{skill.attributes.description}</span>

        {skill.attributes.examples.length > 0 && (
          <>
            <StyledHr />
            {skill.attributes.examples.map(example => (
              <StyledLink key={example.link} linkColor="#000000" href={example.link}>
                {example.title}
              </StyledLink>
            ))}
          </>
        )}
      </SkillDetails>
    </StyledCard>
  );
};

export default SkillCard;
