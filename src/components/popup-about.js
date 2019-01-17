import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PlayB from "../images/playbutton.png";
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <a href="#" onClick={this.toggle}><img src={PlayB} alt="Button"/></a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalBody>
<div className="iframecont">
<iframe data-src="https://player.vimeo.com/video/162705546?autoplay=1" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" tabindex="-1" src="https://player.vimeo.com/video/162705546?autoplay=1" width="600" height="320" frameborder="0"></iframe>
</div>		  
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;