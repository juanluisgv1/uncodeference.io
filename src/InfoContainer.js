/**
 * Created by juangv on 27/04/2018.
 */
import React, { Component } from 'react';
import styled from 'styled-components';

// components
import Home from './Home';
import Sponsors from './Sponsors';
import About from './About';
import Companies from './Companies';


const pages = [
  { view: () => <Home />},
  { view: () => <About />},
  { view: () => <Sponsors />},
  { view: () => <Companies />},
];

const InfoContainer = (props) => {
  return pages[props.page - 1].view();
};

export default InfoContainer;
