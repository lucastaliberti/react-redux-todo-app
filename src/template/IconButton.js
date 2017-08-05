import React from 'react'
import {Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import If from './If'

const IconButton = ({type, icon, onClick, className}) => (
  <Button bsStyle={type} onClick={onClick} className={className}>
    <FontAwesome name={icon} />
  </Button>
)

export default If(({hide}) => hide)(IconButton)
