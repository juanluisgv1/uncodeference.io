import styled from 'styled-components';
import colors from '../styles/colors';

export const Link = styled.a`
  color: ${colors.accentLight};
  font-size: 17px;
  font-family: "Courier new", monospace;
  text-decoration: none;
  border-bottom: .5px dotted ${colors.accentLight};
  margin: 1em 0;
`

export const LinkImportant = styled(Link) `
  font-weight: bold;
  margin: 2em 0;
`;
