import React from 'react'
import { MainSidebar } from 'reactjs-admin-lte'
import FontAwesome from 'react-fontawesome'

import MenuItem from './MenuItem'

const Menu = () => (
  <MainSidebar.Menu>
    <MenuItem slug="/dashboard" icon="dashboard">
      Dashboard
    </MenuItem>
    <MainSidebar.Menu.Header>
      <FontAwesome name="edit" /> Cadastro
    </MainSidebar.Menu.Header>
    <MenuItem slug="/billingCycle" icon="usd">
      Ciclos de pagamentos
    </MenuItem>
  </MainSidebar.Menu>
)

export default Menu
