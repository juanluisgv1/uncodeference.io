import React from 'react';
import { Link, PageTitle, Text, PageWrapper, Spacer, Title } from '../components';

const LongText = Text.withComponent('div').extend`
  text-align: left;
`

export const About = () => (
  <React.Fragment>
    <PageTitle />
    <PageWrapper>
      <Title>What is an unconference? <span role="img" aria-label="hearty-eyes">😍</span></Title>
      <LongText>
        <p>The unconference* format creates space for peer-to-peer learning, collaboration and creativity.</p>
        <p>At the start, the whole group will gather together and be guided through creating an agenda using open space technology. The exact process is not important to understand in advance – the process will become clear as it happens. The important part is that all those gathered will have the opportunity to put conference sessions on the agenda. No session will be voted off or ‘won’t happen’ for some other reason. All sessions are welcome!</p>
        <p>The sessions convened will range from the formal to the informal:</p>
        <ul>
          <li>From the well thought out pre-prepared talk reflecting years of research and practice to the spur of the moment ‘new idea’ that would be fun to talk about.</li>
          <li>From the demonstration of a working tool to the whiteboarding of something completely new.</li>
        </ul>
        <p>Read more about it <Link target="_blank" href="http://unconference.net/unconferencing-how-to-prepare-to-attend-an-unconference/">here</Link>.</p>
      
      </LongText>
      <Spacer />
      
      <Title>Basic info / QA</Title>
      <LongText>
      <p><b>Do I need to give a talk?</b></p>
      <p>No, you don't have to. You can just come and have fun or you can come up with some cool topics.</p>
      <p><b>Do I need to pay something?</b></p>
      <p>No, you don't have to. Our sponsors are taking care that you focus in what is really important.</p>
      <p><b>Which kind of topics will I find during the un-conference?</b></p>
      <p>So far we have heard of people interested in giving a talk about all these topics: GraphQL, Graph Databases, Docker, UnitTesting, React, Angular, Functional programming, SEO, etc </p>
      <p>it's a huge variety of topics :)</p>
      </LongText>

      <Spacer />

      <Title>How is the schedule? <span role="img" aria-label="clock">🕑</span></Title>
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

    </PageWrapper>
  </React.Fragment>
)
