import styled from 'styled-components';
import colors from '../styles/colors';

export const Text = styled.p`
  color: ${colors.accentLight};
  font-size: 17px;
  font-family: "Courier new", monospace;
  max-width: 800px;
  text-align: center;
  
  @media only screen and (max-device-width: 425px) {
    font-size: 15px;
  }
`
