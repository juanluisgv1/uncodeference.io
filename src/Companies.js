/**
 * Created by juangv on 27/04/2018.
 */
import React from 'react';
import styled from 'styled-components';

// constants
import {
  Text,
  Link,
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

const Companies = () => (
  <Wrapper>
    <Title> > Which start ups will attend?</Title>
    <Text> <Link target="_blank" href="https://gronda.eu/home/"> Gronda </Link></Text>
    <Text> <Link target="_blank" href="https://www.txture.io/en"> Txture </Link></Text>
    <Text> <Link target="_blank" href="https://www.kjero.com/"> Kjero </Link></Text>
    <Text> <Link target="_blank" href="https://wedesigntrips.com//"> WeDesignTrips </Link></Text>
    <Text> <Link target="_blank" href="https://www.asi-reisen.de"> ASI Reisen </Link></Text>
  </Wrapper>
)

export default Companies;