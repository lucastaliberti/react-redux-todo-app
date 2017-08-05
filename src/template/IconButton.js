import React from 'react'
import {Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import If from './If'

const IconButton = ({type, icon}) => (
  <Button bsStyle={type}>
    <FontAwesome name={icon} />
  </Button>
)

export default If(({hide}) => hide)(IconButton)
