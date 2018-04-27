/**
 * Created by juangv on 27/04/2018.
 */
import React from 'react';
import styled from 'styled-components';

// constants
import constants from './constants';
import {
  Text,
  Link
} from './styles';


const Wrapper = styled.section`
  max-height: 400px;
  overflow: scroll;
  
  display:flex;
  flex-direction:column;
  align-items: flex-start;
`;

const Title = styled(Text) ` 
  font-weight: bold;
  letter-spacing: 0.1em;
`;

const Spacer = () => (<span className="spacer">&nbsp;&middot;&nbsp;</span>);


const Sponsors = () => (
  <Wrapper>
    <Title>> Who is sponsoring this 💵?</Title>
    <Text> <Link target="_blank" href="https://gronda.eu/home/"> Gronda </Link> --> Organization + IT</Text>
    <Text> <Link target="_blank" href="http://www.werkstaette-wattens.at/de"> Werkstätte Wattens </Link> --> Venue + Food</Text>
    <Text> <Link target="_blank" href="https://www.asi-reisen.de/"> ASI Reisen </Link> --> Merchandising</Text>

    <Spacer />

    <Title>> Who else is supporting us 🚀?</Title>
    <Text> <Link target="_blank" href="https://www.meetup.com/es-ES/ReactJS-Tirol/"> React Tirol Meetup </Link></Text>
    <Text> <Link target="_blank" href="https://webundspeck.com/"> Web&Speck Meetup </Link></Text>
  </Wrapper>
)

export default Sponsors;