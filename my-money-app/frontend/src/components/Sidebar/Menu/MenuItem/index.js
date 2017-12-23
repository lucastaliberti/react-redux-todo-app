import React from 'react'
import { MainSidebar } from 'reactjs-admin-lte'

const MenuItem = ({ index, slug, icon, children }) => (
  <MainSidebar.Menu.Item href={`#${slug}`} iconName={`${icon}`} key={index}>
    {children}
  </MainSidebar.Menu.Item>
)

export default MenuItem
