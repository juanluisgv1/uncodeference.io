import React, { Component } from 'react';
import styled from 'styled-components';

// import Header from './components/Header';

import './App.css';

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  background-color: black;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.p`
  color: white;
  font-size: 17px;
  font-family: "Courier new", monospace;
`;

const Title = styled(Text) ` 
  font-size: 20px; 
  color: black;
  background-color: papayawhip;
  padding: 5px;

`;

const Link = styled.a`
  text-decoration: none;
`;



class App extends Component {

  constructor(props) {
    super(props);

    if (window.location.pathname === '/rsvp') {
      window.location.href = 'https://uncodeferenceio.eventbrite.de';
    }
  }

  render() {
    return (
      <Wrapper>
        <Title> {"uncodeference.io"} </Title>
        <Text> {"The web development unconference"} </Text>
        <Text> {"Wattens, Tyrol · May 25th, 2018"} </Text>
        <Link href="https://uncodeferenceio.eventbrite.de">
          <Text> {"Link --> RSVP"} </Text>
        </Link>
      </Wrapper>
    );
  }
}

export default App;
