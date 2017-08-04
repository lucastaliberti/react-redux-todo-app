import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'

export default props => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='#/'>
          <FontAwesome name='calendar' /> TodoApp
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to='todos'>
          <NavItem eventKey={1}>Tarefas</NavItem>
        </LinkContainer>
        <LinkContainer to='about'>
          <NavItem eventKey={2}>About</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
