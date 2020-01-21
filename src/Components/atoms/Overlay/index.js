import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: royalblue;
  opacity: 0.5;
  z-index: -1;
`;

const Overlay = () => {
  return <StyledDiv />;
};

export default Overlay;
