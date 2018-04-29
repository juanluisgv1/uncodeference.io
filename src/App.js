import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer, InfoContainer } from './components';
import colors from './styles/colors';

const SiteWrapper = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
  padding: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPage: 1
    };
  }

  onClickFooter = (id) => this.setState({ selectedPage: id })

  render() {
    return (
      <SiteWrapper>
        <InfoContainer page={this.state.selectedPage} />
        <Footer onClick={this.onClickFooter} />
      </SiteWrapper>
    )
  }

};

export default App;
