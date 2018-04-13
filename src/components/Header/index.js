/**
 * Created by juangv on 01/04/2018.
 */
import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      isMenuOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  render() {
    return (
      <header>
        <HamburgerMenu
          isOpen={this.state.isMenuOpen}
          menuClicked={this.handleClick}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
      </header>
    );
  }
}

export default Header;