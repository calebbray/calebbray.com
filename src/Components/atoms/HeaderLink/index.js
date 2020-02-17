import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLink = styled(props => <Link {...props} />)`
  color: #ffffff;
  text-decoration: none;
`;

export default HeaderLink;
