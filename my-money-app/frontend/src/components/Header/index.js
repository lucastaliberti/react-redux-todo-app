import React from 'react'
import FontAwesome from 'react-fontawesome'
import { MainHeader } from 'reactjs-admin-lte'

const Header = props => (
  <MainHeader>
    <MainHeader.Logo href="/#/">
      <MainHeader.Logo.Large>
        <FontAwesome name="money" tag="i" />
        <b>My</b> Money
      </MainHeader.Logo.Large>
    </MainHeader.Logo>
    <MainHeader.Navbar />
  </MainHeader>
)

export default Header
