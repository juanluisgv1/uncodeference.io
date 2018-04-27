/**
 * Created by juangv on 27/04/2018.
 */
import React from 'react';
import styled from 'styled-components';

// constants
import styles from './constants';


const Wrapper = styled.section`
  max-height: 400px;
  overflow: scroll;
  
  display:flex;
  flex-direction:column;
  align-items: flex-start;
`;

const Text = styled.p`
  color: ${styles.colors.accentLight};
  font-size: 17px;
  font-family: "Courier new", monospace;
  text-align: center;
`;

const Title = styled(Text) ` 
  font-weight: bold;
  letter-spacing: 0.1em;
`;

const Link = styled.a`
  color: ${styles.colors.accentLight};
  font-size: 17px;
  font-family: "Courier new", monospace;
  text-decoration: none;
  border-bottom: .5px dotted ${styles.colors.accentLight};
  margin: 1em 0;
`;

const Spacer = () => (<span className="spacer">&nbsp;&middot;&nbsp;</span>);


const Sponsors = () => (
  <Wrapper>
    <Title>> Who is sponsoring this 💵?</Title>
    <Text> <Link href="https://gronda.eu/home/"> Gronda </Link> --> Organization + IT</Text>
    <Text> <Link href="http://www.werkstaette-wattens.at/de"> Werkstätte Wattens </Link> --> Venue + Food</Text>
    <Text> <Link href="https://www.asi-reisen.de/"> ASI Reisen </Link> --> Merchandising</Text>

    <Spacer />

    <Title>> Who else is supporting us 🚀?</Title>
    <Text> <Link href="https://www.asi-reisen.de/"> React Tirol Meetup </Link></Text>
    <Text> <Link href="https://www.asi-reisen.de/"> Web&Speck Meetup </Link></Text>
  </Wrapper>
)

export default Sponsors;