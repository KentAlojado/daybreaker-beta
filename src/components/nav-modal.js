import React from 'react';
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
        <a id="Popover1" onClick={this.toggle} onMouseOver={this.toggle} onMouseOut={this.toggle}>
          Events
        </a>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </div>
    );
  }
}