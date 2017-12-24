import React from 'react'
import FontAwesome from 'react-fontawesome'
import { NavLink } from 'react-router-dom'

const MenuItem = ({ index, slug, icon, children }) => (
  <li>
    <NavLink to={`${slug}`}>
      <FontAwesome name={`${icon}`} tag="i" />
      {children}
    </NavLink>
  </li>
)

export default MenuItem
