import styled from 'styled-components';
import { Text } from '.';

export const TextBreaking = styled(Text) `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  >a {
    margin: 0;
  }

  @media only screen and (max-device-width: 320px) {
    .spacer {
      display: none;
    }
    flex-direction: column;
  }
`
