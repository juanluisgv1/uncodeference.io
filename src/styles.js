/**
 * Created by juangv on 27/04/2018.
 */
import styled from 'styled-components';

import constants from './constants';


const Text = styled.p`
  color: ${constants.colors.accentLight};
  font-size: 17px;
  font-family: "Courier new", monospace;
  max-width: 800px;
  
  @media only screen and (max-device-width: 425px) {
    font-size: 15px;
  }
`;

const TextBreaking = styled(Text) `
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
`;

const Link = styled.a`
  color: ${constants.colors.accentLight};
  font-size: 17px;
  font-family: "Courier new", monospace;
  text-decoration: none;
  border-bottom: .5px dotted ${constants.colors.accentLight};
  margin: 1em 0;
`;


export {
  Text,
  TextBreaking,
  Link
};