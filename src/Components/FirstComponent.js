import React, { Component } from 'react';
import '../App.css';
import SecondComponent from './SecondComponent';


export default class FirstComponent extends Component {
  state = {
    menuItem: ['Edit', 'Delete'],
    displayCog: false
  }
  toggleCog = _ => {
    let { displayCog } = this.state;
    this.setState({ displayCog: !displayCog });
  }
  render() {
    let { menuItem, displayCog } = this.state;
    return (
      <div className="App">
        <img src="Black_Settings.png" onClick={this.toggleCog} />
        {displayCog && <SecondComponent menuItem={menuItem} />}
      </div>
    );
  }
}

