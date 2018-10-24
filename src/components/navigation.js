import React from 'react';
import LogoIMG from "../images/logo-full.gif";
import "./navigation.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={LogoIMG} alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Tutorials
                </DropdownToggle>
                <DropdownMenu right>
              <NavItem>
                <NavLink href="#">HTML</NavLink>
              </NavItem>
				  <DropdownItem divider />
              <NavItem>
                <NavLink href="#">CSS</NavLink>
              </NavItem>
				  <DropdownItem divider />
              <NavItem>
                <NavLink href="#">JQuery</NavLink>
              </NavItem>
				  <DropdownItem divider />
              <NavItem>
                <NavLink href="#">Javascript</NavLink>
              </NavItem>			  
                </DropdownMenu>
              </UncontrolledDropdown>
			  
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>			  
              <NavItem>
                <NavLink href="/contact">Contact Us</NavLink>
              </NavItem>			  
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Office
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    New York
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

