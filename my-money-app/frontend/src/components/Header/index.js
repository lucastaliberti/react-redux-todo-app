import React from 'react'
import { MainHeader } from 'reactjs-admin-lte'
import MainHeaderLargeLogo from 'reactjs-admin-lte/lib/MainHeader/MainHeaderLargeLogo'

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
    <MainHeader.SidebarToggle />
  </MainHeader>
)

export default Header
