import React from 'react';
import SliderNav from '../components/nav-slider';
import { Button, Popover, PopoverBody } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <a id="Popover1" onClick={this.toggle}>
          Events
        </a>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverBody>
			<p>We are in 22 cities with more on the way. Join us in the early hours all around the globe.<br/>
			<div className="bg-cs">Events Calendar</div></p>
			<SliderNav />
		  </PopoverBody>
        </Popover>
      </div>
    );
  }
}