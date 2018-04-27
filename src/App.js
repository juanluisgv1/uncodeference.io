import React, { Component } from 'react';
import styled from 'styled-components';

// components
import InfoContainer from './InfoContainer';
import Footer from './Footer';

// constants
import styles from './constants';

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${styles.colors.background};
  padding: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      pageSelected: 1
    };

    this.onClickFooter = this.onClickFooter.bind(this);
  }

  onClickFooter(id) {
    this.setState({pageSelected: id})
  }

  render() {
    return (
      <Wrapper>

        <InfoContainer page={this.state.pageSelected} />

        <Footer onClick={this.onClickFooter}/>

      </Wrapper>
    )
  }

};

export default App;
