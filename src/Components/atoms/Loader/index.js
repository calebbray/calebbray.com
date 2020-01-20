import React from 'react';
import styled from 'styled-components';

import logo from '../../../logo.svg';

const StyledImg = styled.img`
  height: ${props => props.loaderSize}rem;
  pointer-events: none;
  animation: spin infinite 5s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({ loaderSize }) => <StyledImg loaderSize={loaderSize} src={logo} alt="logo" />;

export default Loader;
