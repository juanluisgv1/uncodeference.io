import React, { Component } from 'react';
import styled from 'styled-components';


// constants
import styles from './constants';

const Wrapper = styled.section `
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  
`;

const Text = styled.p`
  color: ${styles.colors.accentLight};
  font-size: 17px;
  font-family: "Courier new", monospace;
  text-align: center;
  cursor: pointer;
`;

const FooterItem = styled(Text) ` 
  font-size: 14px; 
  color: ${props => props.selected ? styles.colors.background : 'white'};
  background-color: ${props => props.selected ? styles.colors.menuItems : 'transparent'};
  padding: 6px 15px 4px 15px;
`;


const menu = [
  { id: 1, text: ' · home '},
  { id: 2, text: ' · about '},
  { id: 3, text: ' · sponsors '},
  ];

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      idSelected: 1
    };


    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({idSelected: e.target.id})
    this.props.onClick(e.target.id);
  }

  render() {
    return (
      <Wrapper>
        { menu.map(item =>
          <FooterItem
            id={item.id}
            selected={this.state.idSelected == item.id}
            onClick={this.onClick} >
              {item.text}
          </FooterItem>
        )}
      </Wrapper>
    );
  }
}

export default Footer;