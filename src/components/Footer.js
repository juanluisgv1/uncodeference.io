import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { Spacer } from '.';
import { Text } from './Text';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
`;

const FooterItem = styled(Text) ` 
  cursor: pointer;
  font-size: 14px; 
  color: ${props => props.selected ? colors.background : 'white'};
  background-color: ${props => props.selected ? colors.menuItems : 'transparent'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  @media only screen and (max-device-width: 425px) {
    flex-direction: column;
  }
`;

const menu = [
  { id: 1, text: 'home' },
  { id: 2, text: 'about' },
  { id: 3, text: 'sponsors' },
  { id: 4, text: 'startups' },
];

export class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      idSelected: 1
    };
  }

  onClick = (id) => {
    this.setState({ idSelected: Number(id) })
    this.props.onClick(id);
  }

  render() {
    return (
      <Wrapper>
        {menu.map(item =>
          <FooterItem
            id={item.id}
            key={item.id}
            selected={this.state.idSelected === item.id}
            onClick={() => this.onClick(item.id)}>
            <Spacer /><span>{item.text}</span>
          </FooterItem>
        )}
      </Wrapper>
    );
  }
}
