import styled from 'styled-components';
import { Text } from '../components/Text'

export const Title = styled(Text) ` 
  font-weight: bold;
  letter-spacing: 0.1em;

  ::before {
    content: '> ';
  }
`;
