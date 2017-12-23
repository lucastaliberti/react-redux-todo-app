import React from 'react'
import { MainHeader } from 'reactjs-admin-lte'

const Header = props => (
  <MainHeader>
    <MainHeader.Logo href="/#/">
      <MainHeader.Logo.Large>
        <i className="fa fa-money" />
        <b>My</b> Money
      </MainHeader.Logo.Large>
      <MainHeader.Logo.Mini>
        <b>My</b>M
      </MainHeader.Logo.Mini>
    </MainHeader.Logo>
    <MainHeader.Navbar>
      <MainHeader.SidebarToggle />
    </MainHeader.Navbar>
  </MainHeader>
)

export default Header
