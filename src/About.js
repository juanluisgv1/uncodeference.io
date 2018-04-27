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
  max-width: 800px;
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


const Home = () => (
  <Wrapper>
    <Title>> What is an unconference?</Title>
    <Text>
      The unconference* format creates space for peer-to-peer learning, collaboration and creativity.
      At the start, the whole group will gather together and be guided through creating an agenda using open space technology. The exact process is not important to understand in advance – the process will become clear as it happens. The important part is that all those gathered will have the opportunity to put conference sessions on the agenda. No session will be voted off or ‘won’t happen’ for some other reason. All sessions are welcome!
      The sessions convened will range from the formal to the informal:
      * From the well thought out pre-prepared talk reflecting years of research and practice to the spur of the moment ‘new idea’ that would be fun to talk about.
      * From the demonstration of a working tool to the whiteboarding of something completely new.
    </Text>
    <Text>
      Read more about <Link href="http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/">here</Link>
    </Text>
  </Wrapper>
)

export default Home;