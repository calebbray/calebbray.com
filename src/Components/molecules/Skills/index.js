import React from 'react';
import styled from 'styled-components';
import Loader from 'Components/atoms/Loader';
import SkillsCard from 'Components/molecules/SkillsCard';
import useFetch from 'hooks/useFetch';

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Skills = () => {
  const { data, isLoading, error } = useFetch('/skills');
  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <Loader loaderSize={10} />
        </LoaderWrapper>
      )}
      {error && <p>There was an error loading skills</p>}
      {data &&
        data
          .sort((a, b) => (a.attributes.rating < b.attributes.rating ? 1 : -1))
          .slice(0, 6)
          .map(skill => {
            return <SkillsCard skill={skill} key={skill.attributes._id} />;
          })}
    </>
  );
};

export default Skills;
