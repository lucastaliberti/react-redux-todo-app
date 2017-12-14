import React from 'react'
import {PageHeader} from 'react-bootstrap'

export default props => (
  <PageHeader>
    {props.name} <small>{props.small}</small>
  </PageHeader>
)
