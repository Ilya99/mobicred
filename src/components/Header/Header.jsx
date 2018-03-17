import React, { Component } from 'react'
import { Container, Nav, Navbar, Button, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'
import logo from 'global/images/logo.png'
import './header.styl'

export default class Header extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div>
        <Container>
          <Navbar light expand='lg'>
            <NavbarBrand className='mr-auto'><img className='logo' src={logo} /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} className='mr-2' />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem className='item'>
                  <NavLink>How we work</NavLink>
                </NavItem>
                <NavItem className='item'>
                  <NavLink>Companies</NavLink>
                </NavItem>
                <NavItem className='item'>
                  <NavLink>Testimonials</NavLink>
                </NavItem>
                <NavItem className='item'>
                  <NavLink>Contact Us</NavLink>
                </NavItem>
                <NavLink><Button outline color='secondary'>Sign Up</Button></NavLink>
                <NavLink><Button outline color='secondary'>Login</Button></NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    )
  }
}
