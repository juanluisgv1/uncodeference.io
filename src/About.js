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


const Home = () => (
  <Wrapper>
    <Title>> What is an unconference?</Title>
    <Text>
      The unconference* format creates space for peer-to-peer learning, collaboration and creativity.
      At the start, the whole group will gather together and be guided through creating an agenda using open space technology. The exact process is not important to understand in advance – the process will become clear as it happens. The important part is that all those gathered will have the opportunity to put conference sessions on the agenda. No session will be voted off or ‘won’t happen’ for some other reason. All sessions are welcome!
      The sessions convened will range from the formal to the informal:
      * From the well thought out pre-prepared talk reflecting years of research and practice to the spur of the moment ‘new idea’ that would be fun to talk about.
      * From the demonstration of a working tool to the whiteboarding of something completely new.

      Read more about <Link target="_blank" href="http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/">here</Link>
    </Text>

    <Title>> How is the schedule?</Title>
    <Text> Start: 8:30 </Text>
    <Text> Finish: 18:00 </Text>

    <Text> --------------- </Text>

    <Text> Session 1: 9:00 </Text>
    <Text> Session 2: 10:00 </Text>
    <Text> Session 3: 11:00 </Text>
    <Text> Session 3: 12:00 </Text>

    <Text> ---- break ---- </Text>

    <Text> Session 5: 14:00 </Text>
    <Text> Session 6: 15:00 </Text>
    <Text> Session 7: 16:00 </Text>
    <Text> Session 8: 17:00 </Text>

    <Text> ---- Networking ---- </Text>

    <Text> … more information soon … </Text>
  </Wrapper>
)

export default Home;