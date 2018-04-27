/**
 * Created by juangv on 27/04/2018.
 */
import React, { Component } from 'react';
import styled from 'styled-components';

// components
import Home from './Home';
import Sponsors from './Sponsors';
import About from './About';

// constants
import styles from './constants';

const view = [
  { id: 1, view: () => <Home />},
  { id: 2, view: () => <About />},
  { id: 3, view: () => <Sponsors />},
]
class InfoContainer extends Component {
  render() {
    const page = view.find(x => x.id == this.props.page);
    return page.view();
  }
}

export default InfoContainer;
