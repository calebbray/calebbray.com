import styled from 'styled-components';
import { white } from 'helpers/colors';

const Link = styled.a`
  color: ${props => props.linkColor};
  text-decoration: none;
  font-size: 1.4rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -0.1rem;
    height: 0.1rem;
    width: 0;
  }
  
  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: -0.1rem;
    height: 0.1rem;
    width: 0;
  }

  &:hover::before {
    width: 100%;
    background: ${props => (props.underlineColor ? props.underlineColor : props.linkColor)};
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%
    background: transparent;
    transition: width 0.5s ease;
  }
`;

export default Link;
